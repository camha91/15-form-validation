import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  handleChangeValue = (event) => {
    const { name, value } = event.target;

    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
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
                  type="text"
                  name="firstName"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>First Name</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  type="text"
                  name="lastName"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Last Name</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  name="userName"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>User Name</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  name="email"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Password</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input
                  type="password"
                  name="passwordConfirm"
                  onChange={this.handleChangeValue}
                  required
                />
                <span className="highlight" />
                <span className="bar" />
                <label>Password Confirmation</label>
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
