import { z } from "zod";

const emptyStringToUndefined = z.literal("").transform(() => undefined);

function asOptionalField(schema) {
  return schema.optional().or(emptyStringToUndefined);
}

const enumErrorMap = {
  errorMap: () => {
    return { message: "Invalid Option Selected" };
  },
};

function flattenNestedEnum(NestedEnumObject, JsonData) {
  if (NestedEnumObject.type === "nestedEnum") {
    Object.entries(NestedEnumObject.options).forEach(([_, value]) => {
      JsonData.push(value);
      flattenNestedEnum(value, JsonData);
    });
  }
}

function getCurrentOptions(data, currentType) {
  if (currentType === "nestedEnum") {
    return Object.keys(data.options);
  } else if (currentType === "enum" || currentType === "multipleChoice") {
    return data.options;
  }
  return [];
}

function updateZodSchemaWithEnum(currentLabel, zodSchema, currentOptions) {
  if (currentLabel in zodSchema) {
    zodSchema[currentLabel] = zodSchema[currentLabel].or(
      z.nativeEnum(currentOptions)
    );
  } else {
    zodSchema[currentLabel] = z.nativeEnum(currentOptions, enumErrorMap);
  }
}

function constructMultiChoiceSchema(currentOptions, zodSchema, currentLabel) {
  currentOptions.forEach((option) => {
    zodSchema[`${currentLabel}-${option}`] = z.boolean();
  });
}

function markMultipleChoiceAsOptional(currentOptions, zodSchema, currentLabel) {
  currentOptions.forEach((option) => {
    const optionWithLabel = `${currentLabel}-${option}`;
    zodSchema[optionWithLabel] = asOptionalField(zodSchema[optionWithLabel]);
  });
}

const createSchema = (inputData) => {
  let JsonData = JSON.parse(JSON.stringify(inputData));
  let zodSchema = {};
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
        zodSchema[currentLabel] = z.string()
          .refine(
            (val) => {
              if (!val || val.trim() === '') return true; // Allow empty
              // Improved email validation
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return emailRegex.test(val);
            },
            { message: "Please enter a valid email address" }
          );
        break;
      case "tel":
        zodSchema[currentLabel] = z.string({
          required_error: "Phone number is required",
          invalid_type_error: "Phone must be a string",
        })
          .refine(
            (val) => {
              if (!val || val.trim() === '') return true;
              
              // Extract phone number without country code
              let phoneOnly = val;
              if (val.trim().startsWith('+')) {
                const parts = val.trim().split(' ');
                phoneOnly = parts.slice(1).join('');
              }
              
              const digitsOnly = phoneOnly.replace(/\D/g, '');
              return digitsOnly.length >= 6 && digitsOnly.length <= 15;
            },
            { 
              message: "Please enter a valid phone number (6-15 digits)",
              params: { code: 'custom_phone_validation' }
            }
          );
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
