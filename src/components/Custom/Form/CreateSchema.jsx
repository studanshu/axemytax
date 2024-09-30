const { z } = require("zod");

const emptyStringToUndefined = z.literal("").transform(() => undefined);

function asOptionalField(schema) {
  return schema.optional().or(emptyStringToUndefined);
}

const createSchema = (JsonData) => {
  let zodSchema = {};
  for (let i = 0; i < JsonData.length; i++) {
    let currentLabel = JsonData[i].formLabel;
    let currentType = JsonData[i].type;
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
        zodSchema[currentLabel] = z.enum(
          JsonData[i].options,
          "Invalid Option Selected."
        );
        zodSchema[currentLabel] = z.string();
        break;
      default:
        zodSchema[currentLabel] = z.string();
        break;
    }

    if (JsonData[i].required === false) {
      zodSchema[currentLabel] = asOptionalField(zodSchema[currentLabel]);
    }
  }
  return z.object(zodSchema);
};

export default createSchema;
