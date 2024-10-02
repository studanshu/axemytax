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

function updateZodSchemaWithEnum(currentLabel, zodSchema, currentOptions) {
  if (currentLabel in zodSchema) {
    zodSchema[currentLabel] = zodSchema[currentLabel].or(
      z.nativeEnum(currentOptions)
    );
  } else {
    zodSchema[currentLabel] = z.nativeEnum(currentOptions, enumErrorMap);
  }
}

function getSchemaType(
  currentType,
  currentLabel = "Input",
  currentOptions = [],
  isRequired = false
) {
  let schema = undefined;
  switch (currentType) {
    case "text":
      schema = z
        .string()
        .min(5, `${currentLabel} should be atleast 5 characters.`)
        .max(500, `${currentLabel} should be less than 500 characters`);
      break;
    case "email":
      schema = z.string().email("Invalid Email");
      break;
    case "tel":
      schema = z.string().regex(/^\d{10}$/, "Invalid Phone Number");
      break;
    case "enum":
      schema = z.nativeEnum(currentOptions, enumErrorMap);
      break;
    default:
      schema = z.string();
  }
  if (!isRequired) {
    schema = asOptionalField(schema);
  }
  return schema;
}

const createSchema = (inputData) => {
  function getCurrentOptions(data, currentType) {
    if (currentType === "nestedEnum") {
      return Object.keys(data.options);
    } else if (currentType === "enum") {
      return data.options;
    }
    return [];
  }

  let JsonData = JSON.parse(JSON.stringify(inputData));
  let zodSchema = {};
  for (let i = 0; i < JsonData.length; i++) {
    let currentLabel = JsonData[i].formLabel;
    let currentType = JsonData[i].type;
    let currentOptions = getCurrentOptions(JsonData[i], currentType);
    switch (currentType) {
      case "text":
      case "email":
      case "tel":
        zodSchema[currentLabel] = getSchemaType(currentType, currentLabel);
        break;
      case "enum":
        updateZodSchemaWithEnum(currentLabel, zodSchema, currentOptions);
        break;
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

export { getSchemaType };
export default createSchema;
