import React from "react";
import { withRouter } from "react-router-dom";
import Background from "../assets/images/bg.png";
import userNeeds from "../assets/images/user-need.png";
import protect from "../assets/images/protect.png";
import law from "../assets/images/law.png";
import { Card, CardImg, Button, Media, Container, Row, Col } from "reactstrap";

class Home extends React.Component {
  render() {
    return (
      <>
        <Card className="border-0">
          <CardImg top width="100%" src={Background} alt="Background" />
          <div>
            <Button
              size="lg"
              style={{
                marginTop: "-28%",
                marginLeft: "6.5%",
                backgroundColor: "#5089C7",
                fontSize: "1rem"
              }}
            >
              Baca Artikel
            </Button>
          </div>
        </Card>
        <Container style={{ margin: "10%" }}>
          <Row style={{ fontSize: "15px" }}>
            <Col xs="4">
              <Media>
                <Media left top href="#" style={{ marginRight: "3%" }}>
                  <img src={userNeeds} alt="user needs" />
                </Media>
                <Media body>
                  <Media heading>
                    <strong style={{ fontSize: "18px" }}>
                      We Meet People’s Needs
                    </strong>
                  </Media>
                  Kami sadar bahwa hukum masih dianggap sebagai sesuatu yang
                  menakutkan dan belum terjangkau untuk semua golongan. Inilah
                  mengapa kami ada; untuk melawan stigma dan menjawab segala
                  kebutuhan legal Anda.
                </Media>
              </Media>
            </Col>
            <Col xs="4">
              <Media>
                <Media left top href="#" style={{ marginRight: "3%" }}>
                  <img src={protect} alt="user needs" />
                </Media>
                <Media body>
                  <Media heading>
                    <strong style={{ fontSize: "18px" }}>
                      We Provide Protection
                    </strong>
                  </Media>
                  Dibantu oleh praktisi hukum dengan pengalaman lebih dari 10
                  tahun, HAKITA memastikan bahwa Anda mendapatkan perlindungan
                  hukum yang sesuai dengan hak Anda sebagai warga negara.
                </Media>
              </Media>
            </Col>
            <Col xs="4">
              <Media>
                <Media left top href="#" style={{ marginRight: "3%" }}>
                  <img src={law} alt="user needs" />
                </Media>
                <Media body>
                  <Media heading>
                    <strong style={{ fontSize: "18px" }}>
                      We Are Trustworthy
                    </strong>
                  </Media>
                  HAKITA hadir karena kami percaya bahwa hukum adalah hak semua
                  orang. Semua yang kami lakukan di HAKITA selalu selaras dengan
                  misi kami untuk menjadikan hukum sebagai sesuatu yang mudah
                  dimengerti dan dapat diakses oleh semua orang.
                </Media>
              </Media>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default withRouter(Home);
