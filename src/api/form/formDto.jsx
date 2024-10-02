export const formDto = ({ ...formInputs }) => {
  let transformedData = JSON.parse(JSON.stringify(formInputs));
  for (let key in transformedData) {
    if (typeof transformedData[key] !== "string") {
      delete transformedData[key];
    }
  }
  transformBusinessType(transformedData);
  transformBudget(transformedData);

  return transformedData;
};

function transformBusinessType(transformedData) {
  if (transformedData.businessType !== undefined) {
    if (transformedData.businessType === "I am an Individual") {
      transformedData.businessType = "individual";
    } else if (transformedData.businessType === "I am an SME") {
      transformedData.businessType = "sme";
    } else if (transformedData.businessType === "I am an Corporate") {
      transformedData.businessType = "corporate";
    }
  }
}

function transformBudget(transformedData) {
  if (transformedData.budget !== undefined) {
    if (transformedData.budget === "My Budget is < Rs. 10,000/-") {
      transformedData.budget = "less than 10000";
    } else if (transformedData.budget === "My Budget is < Rs. 50,000/-") {
      transformedData.budget = "less than 50000";
    } else if (transformedData.budget === "My Budget is < Rs. 1,00,000/-") {
      transformedData.budget = "less than 100000";
    }
  }
}
