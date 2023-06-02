
import React, { useState } from "react"
import './Register.css';
import banner from '../components/images/banner_treelife.jpg';
import { Button, Card, Form, Input } from "reactstrap";

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <Card className="border-0">
        <img src={banner} className="img-fluid img" alt="banner"/>
        <div className="card-img-overlay my-0 py-0">
          <div className="register-form-container">
            <Form className="register-form">
              <div className="register-form-content">
                <h3 className="register-form-title">Log In</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span className="link-primary" onClick={changeAuthMode}>
                    Register
                  </span>
                </div>
                <div className="Form-group mt-3">
                  <Input
                    type="email"
                    className="Form-control mt-1"
                    placeholder="Enter email"
                  />
                </div>
                <div className="Form-group mt-3">
                  <Input
                    type="password"
                    className="Form-control mt-1"
                    placeholder="Enter password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <Button type="submit" color="primary" primary>
                    Submit
                  </Button>
                </div>
                <p className="text-center mt-2">
                  Forgot <a href="#">password?</a>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="border-0">
      <img src={banner} className="img-fluid img" alt="Green Tree,Green World" />
      <div className="card-img-overlay my-0 py-0">
        <div className="register-form-container">
          <Form className="register-form">
            <div className="register-form-content">
              <h3 className="register-form-title">Register Here</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-success" onClick={changeAuthMode}>
                  Login
                </span>
              </div>
              <div className="Form-group mt-3">
                <Input
                  type="email"
                  className="Form-control mt-1"
                  placeholder="e.g Md Mubarak Hossain"
                />
              </div>
              <div className="Form-group mt-3">
                <Input
                  type="email"
                  className="Form-control mt-1"
                  placeholder="Email Address"
                />
              </div>
              <div className="Form-group mt-3">
                <Input
                  type="password"
                  className="Form-control mt-1"
                  placeholder="Password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <Button type="submit"  color="primary" primary>
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Card>
  )
}