import React from "react";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      phoneNumber: null,
      errors: {
        fullName: "",
        phoneNumber: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5
            ? "Full name must be at least 5 characters long!"
            : "";
        break;
      case "phoneNumber":
        errors.phoneNumber =
          value.length !== 10 ? "Phone number must be 10 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fullName">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>
            <div className="phoneNumber">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                onChange={this.handleChange}
                noValidate
              />
              {errors.phoneNumber.length > 0 && (
                <span className="error">{errors.phoneNumber}</span>
              )}
            </div>
            <div className="submit">
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
