import React from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../assets/images/hakita.png";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavLink,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Navbars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    const { toggle } = this;
    return (
      <>
        <Navbar
          color="white"
          light
          expand="sm"
          style={{
            borderBottom: "1px solid",
            borderColor: "rgba(0,0,0,.1)",
            fontSize: "13px",
            paddingRight: "90px",
            paddingLeft: "90px",
            height: "40px"
          }}
        >
          <NavbarBrand href="/">
            <FontAwesomeIcon
              className="mr-auto ml-2"
              color="#1C4481"
              style={{ fontSize: "1rem" }}
              icon={faEnvelope}
            />
            <span className="ml-2" style={{ fontSize: "13px" }}>
              Email: info@hakita.com
            </span>
          </NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem className="pl-3">
              <NavLink href="/">
                <FontAwesomeIcon
                  color="#1C4481"
                  style={{ fontSize: "1rem" }}
                  icon={faFacebookF}
                />
              </NavLink>
            </NavItem>
            <NavItem className="pl-3">
              <NavLink href="">
                <FontAwesomeIcon
                  color="#1C4481"
                  style={{ fontSize: "1rem" }}
                  icon={faInstagram}
                />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div
          className="mr-4 ml-4 pl-5 pr-5"
          style={{ marginBottom: "20px", marginTop: "20px" }}
        >
          <Navbar color="white" light expand="md">
            <NavbarBrand href="/">
              <img src={Logo} alt="Hakita" style={{ height: "50px" }} />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="pl-3">
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem className="pl-3">
                  <NavLink href="/">About</NavLink>
                </NavItem>
                <NavItem className="pl-3">
                  <NavLink href="/">Services</NavLink>
                </NavItem>
                <NavItem className="pl-3">
                  <NavLink href="/blog">Blog</NavLink>
                </NavItem>
                <NavItem className="pl-3">
                  <NavLink href="/">Contact</NavLink>
                </NavItem>
                <NavItem className="pl-3">
                  <Link to="/login">
                    <Button color="primary">Login</Button>
                  </Link>
                </NavItem>
                <NavItem className="pl-3">
                  <Link to="/register">
                    <Button color="primary" outline>
                      Sign Up
                    </Button>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}
export default withRouter(Navbars);
