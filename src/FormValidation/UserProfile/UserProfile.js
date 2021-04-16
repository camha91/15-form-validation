import React, { Component } from "react";
import "./UserProfile.css";

export default class UserProfile extends Component {
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
                <input type="text" name="firstName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>First Name</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input type="text" name="lastName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Last Name</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input type="text" name="userName" required />
                <span className="highlight" />
                <span className="bar" />
                <label>User Name</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="group">
                <input type="text" name="email" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="group">
                <input type="password" name="password" required />
                <span className="highlight" />
                <span className="bar" />
                <label>Password</label>
              </div>
            </div>
            <div className="col-6">
              <div className="group">
                <input type="password" name="passwordConfirm" required />
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
