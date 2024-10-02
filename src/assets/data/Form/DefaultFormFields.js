// Default required Fields: Name, Phone, Service
const DefaultFormFields = {
  name: {
    type: "text",
    fieldType: "input",
    spacing: "half",
    label: "Name",
    formLabel: "name",
    required: true,
  },
  phone: {
    type: "tel",
    fieldType: "input",
    spacing: "half",
    label: "Phone",
    formLabel: "phone",
    required: true,
  },
  companyName: {
    type: "text",
    fieldType: "input",
    spacing: "half",
    label: "Company Name",
    formLabel: "companyName",
    required: false,
  },
  email: {
    type: "email",
    fieldType: "input",
    spacing: "half",
    label: "Email",
    formLabel: "email",
    required: true,
  },
  query: {
    type: "text",
    fieldType: "textarea",
    spacing: "full",
    label: "We're here to help. Tell us about your inquiry",
    formLabel: "query",
    required: true,
  },
  service: {
    type: "nestedEnum",
    label: "Select Service",
    formLabel: "service",
    required: true,
    fieldType: "dropdown",
    spacing: "full",
    options: {
      Taxation: {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Income Tax",
          "GST",
          "TDS",
          "Transfer Pricing",
          "International Taxation",
          "Other",
        ],
      },
      Audit: {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Statutory Audit",
          "Internal Audit",
          "Tax Audit",
          "Transfer Pricing Audit",
          "Other",
        ],
      },
      Accounting: {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: ["Bookkeeping", "Financial Reporting", "Payroll", "Other"],
      },
      Advisory: {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Corporate Advisory",
          "Tax Advisory",
          "Transaction Advisory",
          "Other",
        ],
      },
      Compliance: {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: ["Company Law", "Secretarial", "FEMA", "Other"],
      },
    },
  },
  businessType: {
    type: "enum",
    label: "Select Business Type",
    formLabel: "businessType",
    required: false,
    fieldType: "dropdown",
    spacing: "full",
    options: ["I am an Individual", "I am an SME", "I am a Corporate"],
  },
  budget: {
    type: "enum",
    label: "Select Budget",
    formLabel: "budget",
    required: false,
    fieldType: "dropdown",
    spacing: "full",
    options: [
      "My Budget is < Rs. 10,000/-",
      "My Budget is < Rs. 50,000/-",
      "My Budget is < Rs. 1,00,000/-",
    ],
  },
};

function getFieldPayload(field, required = false) {
  let payload = JSON.parse(JSON.stringify(DefaultFormFields));
  switch (field) {
    case "name":
      payload = payload.name;
      break;
    case "phone":
      payload = payload.phone;
      break;
    case "companyName":
      payload = payload.companyName;
      break;
    case "email":
      payload = payload.email;
      break;
    case "query":
      payload = payload.query;
      break;
    case "service":
      payload = payload.service;
      break;
    case "businessType":
      payload = payload.businessType;
      break;
    case "budget":
      payload = payload.budget;
      break;
    default:
      payload = {};
      break;
  }
  payload.required = required;
  return payload;
}

export { getFieldPayload };
export default DefaultFormFields;
