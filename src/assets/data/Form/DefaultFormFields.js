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
    required: false,
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
    required: false,
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
      "Direct Taxation": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Appeals & Assessment",
          "Change in Particulars of PAN",
          "Defective Return",
          "Fresh ITR Filing",
          "New PAN",
          "PAN Activation",
          "Previous Year's ITR Filing",
          "Rectification Return",
          "Relocation of PAN",
          "Revised Return",
          "Surrender of PAN",
          "Income Tax",
          "Direct Taxation",
          "Transfer Pricing",
          "International Taxation",
          "Other",
        ],
      },
      "Indirect Taxation": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "GST Registration",
          "GST Filing",
          "GST Audit",
          "Other",
        ],
      },
      "Business Incorporation": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Sole Proprietorship Incorporation",
          "HUF Incorporation",
          "Partnership Incorporation",
          "LLP Incorporation",
          "Private Limited",
          "Public Limited",
          "Other",
        ],
      },
      "Auditing": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Statutory Auditing",
          "Tax Auditing",
          "Stock Auditing",
          "Internal Audit",
          "Fixed Asset Verification",
          "Other",
        ],
      },
      "Book Keeping": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Providing Services Up to 100 Entries",
          "Other",
        ],
      },
      "Certifications": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Lower TDS Certificate",
          "Repatriation Certificate",
          "House Property Certificate",
          "Net Worth Certificate",
          "Other Attestations",
          "Other",
        ],
      },
      "TDS": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "TAN Creation",
          "TDS on Domestic Sale of Property",
          "TDS on Rent",
          "TDS on Purchase of Property from NRI",
          "TDS Return Filing",
          "TDS Correction Returns",
          "Form 16A & 16B",
          "Other",
        ],
      },
      "Digital Signatures": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Domestic - 2 years",
          "Domestic - 3 years",
          "International - 2 years",
          "International - 3 years",
          "Other",
        ],
      },
      "Investment Advisory": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Capital Gains",
          "Create Corporate FDs",
          "Other",
        ],
      },
      "Consulting": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "General Consulting",
          "Other",
        ],
      },
      "Others": {
        type: "enum",
        label: "Select Sub-Service",
        required: false,
        spacing: "full",
        formLabel: "subService",
        options: [
          "Other Services",
        ],
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
  checkboxCollection: {
    type: "multipleChoice",
    label: "Select All That Apply",
    formLabel: "checkboxCollection",
    required: false,
    fieldType: "checkbox",
    spacing: "full",
    options: [
      "I am a new customer",
      "I am an existing customer",
      "I am a supplier",
      "I am a partner",
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
