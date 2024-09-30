const formValidations = ({ type, required }) => {
  switch (type) {
    case "text":
      return (input) => {
        if (input.length > 3000) {
          return "Text should be less than 3000 characters";
        }
      };
    case "email":
      return (input) => {
        if (required && input.length === 0) {
          return "Email is required";
        } else if (
          input.length > 0 &&
          !input.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
        ) {
          return "Invalid Email";
        }
      };
    case "tel":
      return (input) => {
        if (required && input.length === 0) {
          return "Phone Number is required";
        } else if (input.length > 0 && !input.match(/^\d{10}$/)) {
          return "Invalid Phone Number";
        }
      };
    case "enum":
      return (input, options) => {
        if (required && input.length === 0) {
          return "Option is required";
        } else if (input.length > 0 && !options.includes(input)) {
          return "Invalid Option Selected.";
        }
      };
    default:
      return () => {
        return "Invalid Input";
      };
  }
};

export default formValidations;
