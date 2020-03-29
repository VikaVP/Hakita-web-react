import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar, Jumbotron, Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <>
        <Jumbotron fluid className="bg-dark" style={{ marginBottom: "-25%" }}>
          <Container fluid>
            <Row>
              <Col xs="7" style={{ paddingLeft: "5%" }}>
                <p className="lead" style={{ color: "white" }}>
                  About us
                </p>
                <p
                  className="lead"
                  style={{
                    color: "rgba(255,255,255,.5)",
                    fontSize: "1rem",
                    width: "80%"
                  }}
                >
                  HAKITA adalah sebuah platform yang menjawab kebutuhan
                  masyarakat Indonesia dalam membuat dan memproses dokumen legal
                  yang aman dan terpercaya. Kami menggunakan teknologi otomasi
                  untuk mempermudah proses pembuatan dokumen.
                </p>
              </Col>
              <Col xs="5">
                <p className="lead" style={{ color: "white" }}>
                  Contact Us
                </p>
                <p
                  className="lead"
                  style={{ color: "rgba(255,255,255,.5)", fontSize: "1rem" }}
                >
                  Mail: info@hakita.com Alamat: Jl. Boulevard Barat Raya No.27,
                  RW. 9, Kelapa Gading Barat - Jakarta Utara 14240
                </p>
                <FontAwesomeIcon
                  color="rgba(255,255,255,.5)"
                  style={{ fontSize: "1.5rem", marginRight: "5%" }}
                  icon={faFacebookF}
                />
                <FontAwesomeIcon
                  color="rgba(255,255,255,.5)"
                  style={{ fontSize: "1.5rem" }}
                  icon={faInstagram}
                />
              </Col>
            </Row>
          </Container>
          <Navbar
            expand="sm"
            style={{
              borderTop: "1px solid",
              borderColor: "rgba(255,255,255,.5)",
              fontSize: "13px",
              height: "20px"
            }}
            className="justify-content-center align-items-center "
          >
            <p style={{ color: "rgba(255,255,255,.5)", paddingTop: "3%" }}>
              © PT Hakita Indonesia, 2020
            </p>
          </Navbar>
        </Jumbotron>
      </>
    );
  }
}
export default withRouter(Footer);
