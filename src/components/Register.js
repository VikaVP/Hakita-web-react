import React, { Component } from "react";
import RegisterImage from "../assets/images/log1.jpg";
import { Redirect, Link } from "react-router-dom";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  Row
} from "reactstrap";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState = {
      [e.target.name]: e.target.value
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    return <Redirect to="/" />;
  }

  render() {
    return (
      <Container className="mt-5" style={{ padding: "5%" }}>
        <Row>
          <Col xs="7">
            <Card
              style={{
                width: "70%",
                padding: "2%",
                boxShadow: "3px 3px 3px rgba(0,0,0,.5)",
                backgroundImage: "linear-gradient(#DE6262, #FFB88C)",
                color: "white"
              }}
            >
              <h2>Sign Up</h2>
              <Form
                className="form"
                style={{ padding: "5%" }}
                onSubmit={this.handleSubmit}
              >
                <Col>
                  <FormGroup>
                    <Label>Username</Label>
                    <Input
                      type="text"
                      name="username"
                      id="exampleusername"
                      onChange={this.handleChange}
                      placeholder="type your name"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      onChange={this.handleChange}
                      placeholder="example: myemail@email.com"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="examplePassword"
                      onChange={this.handleChange}
                      placeholder="type your password"
                      required
                    />
                  </FormGroup>
                </Col>
                <Link to="/">
                  <Button
                    style={{ backgroundColor: "#DE6262", border: "none" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Link>
                <div>
                  <a href="/"> Back</a>
                </div>
                <span>
                  Have another account ? <a href="/login">Go to Login page</a>
                </span>
              </Form>
            </Card>
          </Col>
          <Col xs="5">
            <img src={RegisterImage} style={{ width: "150%" }} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
