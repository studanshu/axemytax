import { z } from "zod";

const emptyStringToUndefined = z.literal("").transform(() => undefined);

function asOptionalField<T extends z.ZodTypeAny>(schema: T) {
  return schema.optional().or(emptyStringToUndefined);
}

const enumErrorMap = {
  errorMap: () => {
    return { message: "Invalid Option Selected" };
  },
};

interface NestedEnumOption {
  type: string;
  fieldType: string;
  spacing?: string;
  label: string;
  formLabel: string;
  required?: boolean;
  options?: Record<string, NestedEnumOption> | string[];
}

interface FormInputData {
  type: string;
  fieldType: string;
  spacing?: string;
  label: string;
  formLabel: string;
  required?: boolean;
  options?: Record<string, NestedEnumOption> | string[];
}

function flattenNestedEnum(
  NestedEnumObject: NestedEnumOption,
  JsonData: FormInputData[]
): void {
  if (NestedEnumObject.type === "nestedEnum") {
    Object.entries(NestedEnumObject.options as Record<string, NestedEnumOption>).forEach(
      ([_, value]) => {
        JsonData.push(value);
        flattenNestedEnum(value, JsonData);
      }
    );
  }
}

function getCurrentOptions(data: FormInputData, currentType: string): string[] {
  if (currentType === "nestedEnum") {
    return Object.keys(data.options as Record<string, NestedEnumOption>);
  } else if (currentType === "enum" || currentType === "multipleChoice") {
    return data.options as string[];
  }
  return [];
}

function updateZodSchemaWithEnum(
  currentLabel: string,
  zodSchema: Record<string, z.ZodTypeAny>,
  currentOptions: string[]
): void {
  const enumObject = currentOptions.reduce((acc, option) => {
    acc[option] = option;
    return acc;
  }, {} as Record<string, string>);

  if (currentLabel in zodSchema) {
    zodSchema[currentLabel] = zodSchema[currentLabel].or(
      z.nativeEnum(enumObject as any)
    );
  } else {
    zodSchema[currentLabel] = z.nativeEnum(enumObject as any, enumErrorMap);
  }
}

function constructMultiChoiceSchema(
  currentOptions: string[],
  zodSchema: Record<string, z.ZodTypeAny>,
  currentLabel: string
): void {
  currentOptions.forEach((option) => {
    zodSchema[`${currentLabel}-${option}`] = z.boolean();
  });
}

function markMultipleChoiceAsOptional(
  currentOptions: string[],
  zodSchema: Record<string, z.ZodTypeAny>,
  currentLabel: string
): void {
  currentOptions.forEach((option) => {
    const optionWithLabel = `${currentLabel}-${option}`;
    zodSchema[optionWithLabel] = asOptionalField(zodSchema[optionWithLabel]);
  });
}

const createSchema = (inputData: FormInputData[]): Record<string, z.ZodTypeAny> => {
  let JsonData: FormInputData[] = JSON.parse(JSON.stringify(inputData));
  let zodSchema: Record<string, z.ZodTypeAny> = {};
  
  for (let i = 0; i < JsonData.length; i++) {
    let currentLabel = JsonData[i].formLabel;
    let currentType = JsonData[i].type;
    let currentOptions = getCurrentOptions(JsonData[i], currentType);
    
    switch (currentType) {
      case "text":
        zodSchema[currentLabel] = z
          .string()
          .min(5, `${currentLabel} should be atleast 5 characters.`)
          .max(500, `${currentLabel} should be less than 500 characters`);
        break;
      case "email":
        zodSchema[currentLabel] = z.string().email("Invalid Email");
        break;
      case "tel":
        zodSchema[currentLabel] = z
          .string()
          .regex(/^\d{10}$/, "Invalid Phone Number");
        break;
      case "enum":
      case "nestedEnum":
        updateZodSchemaWithEnum(currentLabel, zodSchema, currentOptions);
        flattenNestedEnum(JsonData[i], JsonData);
        break;
      case "multipleChoice":
        constructMultiChoiceSchema(currentOptions, zodSchema, currentLabel);
        break;
      default:
        zodSchema[currentLabel] = z.string();
        break;
    }

    if (JsonData[i].required === false) {
      if (currentType === "multipleChoice") {
        markMultipleChoiceAsOptional(currentOptions, zodSchema, currentLabel);
      } else {
        zodSchema[currentLabel] = asOptionalField(zodSchema[currentLabel]);
      }
    }
  }
  return zodSchema;
};

export default createSchema;
