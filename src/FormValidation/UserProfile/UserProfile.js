import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  state = {
    values: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    errors: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  };

  handleChangeValue = (event) => {
    const { name, value } = event.target;
    const newValues = { ...this.state.values, [name]: value };
    const newErrors = { ...this.state.errors };

    if (value.trim() === "") {
      newErrors[name] = name + " is invalid!";
    }

    if (name === "email") {
      const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regexEmail.test(value)) {
        // if email is invalid
        newErrors[name] = name + " is invalid!";
      } else {
        newErrors[name] = ""; // No error msg if email is valid
      }
    }

    if (name === "passwordConfirm") {
      if (value === newValues["password"]) {
        newErrors[name] = ""; // password match
      } else {
        newErrors[name] = name + " is invalid!";
      }
    }

    this.setState({
      values: newValues,
      errors: newErrors,
    });
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#EEEEEE",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            fontSize:
              'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif',
            width: 600,
          }}
          className="bg-white p-5 m-5"
        >
          <h1 className="text-center mt-0 mb-5">User Profile</h1>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.firstName}
                  type="text"
                  name="firstName"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>First Name</label>
                <span className="text text-danger">
                  {this.state.errors.firstName}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.lastName}
                  type="text"
                  name="lastName"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Last Name</label>
                <span className="text text-danger">
                  {this.state.errors.lastName}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.userName}
                  type="text"
                  name="userName"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>User Name</label>
                <span className="text text-danger">
                  {this.state.errors.userName}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  value={this.state.values.email}
                  type="email"
                  name="email"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
                <span className="text text-danger">
                  {this.state.errors.email}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.password}
                  type="password"
                  name="password"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Password</label>
                <span className="text text-danger">
                  {this.state.errors.password}
                </span>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  value={this.state.values.passwordConfirm}
                  type="password"
                  name="passwordConfirm"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Password Confirmation</label>
                <span className="text text-danger">
                  {this.state.errors.passwordConfirm}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <button className="btn text-white bg-dark col-12 w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
