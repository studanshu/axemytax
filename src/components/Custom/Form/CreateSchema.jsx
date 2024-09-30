const { z } = require("zod");

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
    Object.entries(NestedEnumObject.options).map(([_, value]) => {
      JsonData.push(value);
      flattenNestedEnum(value, JsonData);
    });
  }
}

function getCurrentOptions(data, currentType) {
  if (currentType === "nestedEnum") {
    return Object.keys(data.options);
  } else if (currentType === "enum") {
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
      default:
        zodSchema[currentLabel] = z.string();
        break;
    }

    if (JsonData[i].required === false) {
      zodSchema[currentLabel] = asOptionalField(zodSchema[currentLabel]);
    }
  }
  return zodSchema;
};

export default createSchema;
