import React from "react";
import { withRouter } from "react-router-dom";
import icon3 from "../assets/images/icon3.png";
import icon2 from "../assets/images/icon2.png";
import icon1 from "../assets/images/icon1.png";
import bg2 from "../assets/images/bg2.png";
import email from "../assets/images/email.png";
import address from "../assets/images/address.png";
import {
  Card,
  CardImg,
  CardBody,
  Container,
  Row,
  Col,
  CardText,
  CardTitle,
  Badge,
  Button
} from "reactstrap";

class Home extends React.Component {
  render() {
    return (
      <>
        <Container style={{ margin: "5%" }}>
          <div style={{ margin: "5%" }}>
            <h1 className="text-center">
              <strong>Product and Services</strong>
            </h1>
            <div className="text-center" style={{ marginTop: "5%" }}>
              Apapun kebutuhan legal Anda, biar HAKITA yang urus.
            </div>
          </div>
          <Row style={{ fontSize: "15px" }}>
            <Col xs="4">
              <Card style={{ boxShadow: "3px 3px 15px rgba(0,0,0,.3)" }}>
                <CardBody className="mx-auto">
                  <CardImg
                    src={icon1}
                    alt="Jasa Pembuatan"
                    style={{ height: "120px", width: "120px" }}
                  />
                </CardBody>
              </Card>
              <Card className="border-0 mt-3">
                <CardBody style={{ textAlign: "center" }}>
                  <CardTitle>
                    <h5>
                      <strong>Jasa Pembuatan PT</strong>
                    </h5>
                  </CardTitle>
                  <CardText>
                    Sekarang buat PT tidak harus mahal dan lama. Kami mengerti
                    bahwa bisnis Anda perlu dilindungi hukum. Di HAKITA, kami
                    membantu Anda membuat PT dengan proses yang cepat dan aman
                    dengan harga terjangkau.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card style={{ boxShadow: "3px 3px 15px rgba(0,0,0,.3)" }}>
                <CardBody className="mx-auto">
                  <CardImg
                    src={icon2}
                    alt="Otomasi Dokumen"
                    style={{ height: "120px", width: "120px" }}
                  />
                </CardBody>
              </Card>
              <Card className="border-0 mt-3">
                <CardBody style={{ textAlign: "center" }}>
                  <CardTitle>
                    <h5>
                      <strong>Otomasi Dokumen</strong>
                    </h5>
                  </CardTitle>
                  <CardText>
                    Buat dokumen sudah tidak perlu ribet lagi. Dokumen yang
                    biasa butuh waktu berminggu-minggu sekarang bisa selesai
                    dalam hitungan menit dengan template dari HAKITA.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card style={{ boxShadow: "3px 3px 15px rgba(0,0,0,.3)" }}>
                <CardBody className="mx-auto">
                  <CardImg
                    src={icon3}
                    alt="Dokumen"
                    style={{ height: "120px", width: "120px" }}
                  />
                </CardBody>
              </Card>
              <Card className="border-0 mt-3">
                <CardBody style={{ textAlign: "center" }}>
                  <CardTitle>
                    <h5>
                      <strong>Sistem Manajemen Dokumen</strong>
                    </h5>
                  </CardTitle>
                  <CardText>
                    Kerja lebih efisien dengan HAKITA! Tidak hanya memantau
                    ribuan dokumen yang Anda miliki, teknologi kami juga dapat
                    memberi tahu Anda jika ada dokumen yang membutuhkan
                    perhatian khusus lewat fitur reminder kami.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Card className="border-0">
          <CardImg top width="100%" src={bg2} alt="Background" />
        </Card>
        <Container style={{ margin: "5%" }}>
          <div style={{ margin: "5%" }}>
            <h1 className="text-center">
              <strong>Love Reading, Keep Reading</strong>
            </h1>
            <div
              className="text-center"
              style={{ marginTop: "5%", color: "rgba(0,0,0,.5" }}
            >
              Punya pertanyaan soal hukum? Temukan jawabannya di blog HAKITA.
            </div>
          </div>
          <Row style={{ fontSize: "15px" }}>
            <Col xs="4">
              <Card
                style={{
                  boxShadow: "3px 3px 15px rgba(0,0,0,.3)",
                  height: "100%"
                }}
              >
                <CardBody>
                  <Button color="primary" size="sm" className="mb-3">
                    Hakita News
                  </Button>
                  <CardTitle>
                    <h5>
                      <strong>Perlindungan Hukum Dalam Belanja Online</strong>
                    </h5>
                  </CardTitle>
                  <CardText style={{ color: "rgba(0,0,0,.5" }}>
                    2 weeks ago
                  </CardText>
                  <a href="">Read More</a>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card
                style={{
                  boxShadow: "3px 3px 15px rgba(0,0,0,.3)",
                  height: "100%"
                }}
              >
                <CardBody>
                  <Button color="primary" size="sm" className="mb-3">
                    Hakita News
                  </Button>
                  <CardTitle>
                    <h5>
                      <strong>Aturan Razia Secara Hukum</strong>
                    </h5>
                  </CardTitle>
                  <CardText style={{ color: "rgba(0,0,0,.5" }}>
                    2 weeks ago
                  </CardText>
                  <a href="">Read More</a>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card
                style={{
                  boxShadow: "3px 3px 15px rgba(0,0,0,.3)",
                  height: "100%"
                }}
              >
                <CardBody>
                  <Button color="primary" size="sm" className="mb-3">
                    Hakita News
                  </Button>
                  <CardTitle>
                    <h5>
                      <strong>
                        Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?
                      </strong>
                    </h5>
                  </CardTitle>
                  <CardText style={{ color: "rgba(0,0,0,.5" }}>
                    2 weeks ago
                  </CardText>
                  <a href="">Read More</a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container style={{ margin: "5%" }}>
          <div style={{ margin: "5%" }}>
            <h1 className="text-center">
              <strong>Have a question?</strong>
            </h1>
          </div>
          <Row style={{ fontSize: "15px" }}>
            <Col xs="2"></Col>
            <Col xs="4">
              <Card style={{ height: "100%" }}>
                <CardBody className="mx-auto">
                  <CardImg
                    src={email}
                    alt="email"
                    style={{
                      height: "100px",
                      width: "100px",
                      marginBottom: "20px"
                    }}
                  />
                  <CardTitle>
                    <h6>
                      <strong>info@hakita.com</strong>
                    </h6>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col xs="4">
              <Card
                style={{ height: "100%" }}
                className="justify-content-center"
              >
                <CardBody className="mx-auto">
                  <img
                    className="text-center"
                    src={address}
                    alt="address"
                    style={{
                      height: "100px",
                      width: "100px",
                      marginBottom: "20px",
                      marginLeft: "30%"
                    }}
                  />
                  <CardTitle>
                    <h6 className="text-center">
                      <strong>
                        Jl. Boulevard Barat Raya No. 27, Kelapa Gading Barat,
                        Jakarta Utara
                      </strong>
                    </h6>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
            <Col xs="2"></Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default withRouter(Home);
