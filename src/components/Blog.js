import React, { Component } from "react";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, Jumbotron, Col, Row, Media } from "reactstrap";

class Blog extends Component {
  render() {
    return (
      <>
        <Jumbotron
          fluid
          style={{
            backgroundColor: "#1C4481",
            color: "white"
          }}
        >
          <Container fluid>
            <h1 className="display-4 ml-5">
              <strong>Blog</strong>
            </h1>
          </Container>
        </Jumbotron>
        <Container style={{ marginTop: "5%", marginBottom: "5%" }}>
          <Row>
            <Col xs="9">
              <div>
                <img src={image1} alt="" />
                <h3 style={{ marginTop: "3%" }}>
                  <strong>Perlindungan Hukum Dalam Belanja Online</strong>
                </h3>
                <h6 style={{ color: "rgba(0,0,0,.3" }}>2 weeks ago in</h6>
                <p>
                  Di zaman sekarang, belanja online sudah menjadi hal yang biasa
                  dilakukan. Tetapi, kita harus tetap hati-hati dengan adanya
                  penipuan online.
                </p>
                <a href="">
                  <small>CONTINUE READING</small>
                </a>
              </div>
              <div>
                <h3 style={{ marginTop: "3%" }}>
                  <strong>Aturan Razia Secara Hukum</strong>
                </h3>
                <h6 style={{ color: "rgba(0,0,0,.3" }}>2 weeks ago in</h6>
                <p>
                  Razia sudah sering menjadi berita di Indonesia. Yang paling
                  sering didengar adalah razia tempat hiburan seperti bar,
                  hotel, dan restoran. Tetapi apakah razia memiliki dasar hukum?
                </p>
                <a href="">
                  <small>CONTINUE READING</small>
                </a>
              </div>
              <div>
                <img src={image2} alt="" />
                <h3 style={{ marginTop: "3%" }}>
                  <strong>
                    Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?
                  </strong>
                </h3>
                <h6 style={{ color: "rgba(0,0,0,.3" }}>2 weeks ago in</h6>
                <p>
                  Bagi para pengguna jalan, kita semua pasti sering melihat
                  konvoi mobil atau motor di jalan. Iring-iringan kendaraan ini
                  memang sering kita lihat tetapi apakah semua iring-iringan ini
                  bisa dibilang sebagai konvoi?
                </p>
                <a href="">
                  <small>CONTINUE READING</small>
                </a>
              </div>
              <div>
                <img src={image3} alt="" />
                <h3 style={{ marginTop: "3%" }}>
                  <strong>
                    Apakah Polisi Boleh Menilang Tanpa Surat Tugas?
                  </strong>
                </h3>
                <h6 style={{ color: "rgba(0,0,0,.3" }}>2 weeks ago in</h6>
                <p>
                  Bagi pengguna jalan sehari-hari, kita sudah tidak asing lagi
                  dengan razia dan penilangan yang biasa dilakukan polisi. Di
                  artikel kali ini, HAKITA akan membahas tentang prosedur
                  penilangan dan apa hak Anda sebagai warga negara jika terjadi
                  pemeriksaan di jalan.
                </p>
                <a href="">
                  <small>CONTINUE READING</small>
                </a>
              </div>
              <div>
                <h3 style={{ marginTop: "3%" }}>
                  <strong>
                    Apakah Polisi Boleh Melakukan Penggeledahan Tanpa Surat
                    Izin?
                  </strong>
                </h3>
                <h6 style={{ color: "rgba(0,0,0,.3" }}>2 weeks ago in</h6>
                <p>
                  Penggeledahan mungkin bukan kata yang asing di telinga kita,
                  namun sebenarnya apa sih penggeledahan itu di mata hukum?
                </p>
                <a href="">
                  <small>CONTINUE READING</small>
                </a>
              </div>
              <div>
                <img src={image4} alt="" />
                <h3 style={{ marginTop: "3%" }}>
                  <strong>
                    Tukang Parkir Depan Indomaret: Legal atau Tidak
                  </strong>
                </h3>
                <h6 style={{ color: "rgba(0,0,0,.3" }}>2 weeks ago in</h6>
                <p>
                  Tukang parkir di depan minimarket di Bekasi jadi perbincangan
                  hangat setelah aksi unjuk rasa oleh gabungan organisasi
                  masyarakat menuntut jatah pengelolaan parkir di berbagai
                  minimarket di Bekasi.
                </p>
                <a href="">
                  <small>CONTINUE READING</small>
                </a>
              </div>
              <div>
                <img src={image5} alt="" />
                <h3 style={{ marginTop: "3%" }}>
                  <strong>
                    Menyita KTP Pelaku Tabrakan: Legal atau Tidak?
                  </strong>
                </h3>
                <h6 style={{ color: "rgba(0,0,0,.3" }}>2 weeks ago in</h6>
                <p>
                  Menyita KTP, SIM, atau STNK pelaku tabrakan sepertinya sudah
                  menjadi sebuah tradisi yang dilakukan di Indonesia. Padahal
                  sebenarnya hal ini tidak dibenarkan secara hukum.
                </p>
                <a href="">
                  <small>CONTINUE READING</small>
                </a>
              </div>
              <div>
                <img src={image6} alt="" />
                <h3 style={{ marginTop: "3%" }}>
                  <strong>Double Swipe Dalam Transaksi Kartu Kredit</strong>
                </h3>
                <h6 style={{ color: "rgba(0,0,0,.3" }}>2 weeks ago in</h6>
                <p>
                  Kalau kalian sering menggunakan kartu kredit untuk melakukan
                  transaksi, kalian harus berhati-hati dengan pencurian data.
                  Kok bisa? Kasus pencurian data atau duplikasi pemegang kartu
                  kredit bisa banyak terjadi karena adanya double swipe atau dua
                  kali gesek yang dilakukan dalam proses transaksi. Apa itu
                  double swipe?
                </p>
                <a href="">
                  <small>CONTINUE READING</small>
                </a>
              </div>
              <div>
                <h3 style={{ marginTop: "3%" }}>
                  <strong>Apa Fungsi Materai Sebenarnya?</strong>
                </h3>
                <h6 style={{ color: "rgba(0,0,0,.3" }}>1 month ago in</h6>
                <p>
                  Teman-teman pasti sudah tidak asing lagi dengan istilah
                  materai. Dalam membuat perjanjian hitam diatas putih, pihak
                  yang bersangkutan harus menandatangani dokumen di atas
                  meterai. Banyak yang menganggap bahwa materai adalah syarat
                  sah dari sebuah perjanjian antara kedua belah pihak. Benarkah
                  begitu?
                </p>
                <a href="">
                  <small>CONTINUE READING</small>
                </a>
              </div>
              <div>
                <h3 style={{ marginTop: "3%" }}>
                  <strong>Perbedaan Hukum Pidana dan Perdata</strong>
                </h3>
                <h6 style={{ color: "rgba(0,0,0,.3" }}>1 month ago in</h6>
                <p>
                  Banyak dari kita yang sering mendengar istilah hukum pidana
                  dan hukum perdata. Meski begitu, masih banyak juga masyarakat
                  Indonesia yang belum benar-benar mengerti mengenai perbedaan
                  hukum pidana dan dan hukum perdata. Karena itu, di artikel
                  kali ini, HAKITA akan membahas apa saja perbedaan hukum pidana
                  dan perdata.
                </p>
                <a href="">
                  <small>CONTINUE READING</small>
                </a>
              </div>
              <div style={{ marginTop: "3%" }}>
                <span>1</span>
                <span
                  style={{
                    marginLeft: "2%",
                    marginRight: "2%",
                    color: "rgba(0,0,0,.5)"
                  }}
                >
                  2
                </span>
                <span style={{ color: "rgba(0,0,0,.5)" }}>></span>
              </div>
            </Col>
            <Col xs="3">
              <div>
                <input
                  type="text"
                  placeholder="Search.."
                  style={{
                    borderRadius: "0",
                    height: "100%",
                    padding: "6%",
                    width: "100%"
                  }}
                />
                <span style={{ marginLeft: "-102%" }}>
                  <FontAwesomeIcon
                    className="mr-auto ml-2"
                    color="rgba(0,0,0,.5)"
                    style={{
                      fontSize: "1rem"
                    }}
                    icon={faSearch}
                  />
                </span>
              </div>
              <Col>
                <Media style={{ marginTop: "15%" }}>
                  <Media left top href="#" style={{ marginRight: "3%" }}>
                    <div
                      style={{
                        height: "80px",
                        width: "80px",
                        background: `url(${image1}) no-repeat center`,
                        backgroundSize: "cover",
                        backgroundClip: "border-box"
                      }}
                    ></div>
                  </Media>
                  <Media body>
                    <Media>
                      <small>Perlindungan Hukum Dalam Belanja Online</small>
                    </Media>
                    <small style={{ color: "rgba(0,0,0,.3" }}>
                      March 17, 2020
                    </small>
                  </Media>
                </Media>
                <div style={{ marginTop: "15%" }}>
                  <small>Aturan Razia Secara Hukum</small>
                  <div>
                    <small style={{ color: "rgba(0,0,0,.3" }}>
                      March 17, 2020
                    </small>
                  </div>
                </div>
                <Media style={{ marginTop: "15%" }}>
                  <Media left top href="#" style={{ marginRight: "3%" }}>
                    <div
                      style={{
                        height: "80px",
                        width: "80px",
                        background: `url(${image2}) no-repeat center`,
                        backgroundSize: "cover",
                        backgroundClip: "border-box"
                      }}
                    ></div>
                  </Media>
                  <Media body>
                    <Media>
                      <small>
                        Konvoi Mobil dan Motor di Indonesia, Apa Aturannya?
                      </small>
                    </Media>
                    <small style={{ color: "rgba(0,0,0,.3" }}>
                      March 17, 2020
                    </small>
                  </Media>
                </Media>
                <Media style={{ marginTop: "15%" }}>
                  <Media left top href="#" style={{ marginRight: "3%" }}>
                    <div
                      style={{
                        height: "80px",
                        width: "80px",
                        background: `url(${image3}) no-repeat center`,
                        backgroundSize: "cover",
                        backgroundClip: "border-box"
                      }}
                    ></div>
                  </Media>
                  <Media body>
                    <Media>
                      <small>
                        Apakah Polisi Boleh Menilang Tanpa Surat Tugas?
                      </small>
                    </Media>
                    <small style={{ color: "rgba(0,0,0,.3" }}>
                      March 17, 2020
                    </small>
                  </Media>
                </Media>
                <div style={{ marginTop: "15%" }}>
                  <small>
                    Apakah Polisi Boleh Melakukan Penggeledahan Tanpa Surat
                    Izin?
                  </small>
                  <div>
                    <small style={{ color: "rgba(0,0,0,.3" }}>
                      March 17, 2020
                    </small>
                  </div>
                </div>
                <div style={{ marginTop: "15%" }}>
                  <p>Recent Comments</p>
                </div>
                <div style={{ marginTop: "15%" }}>
                  <p>Categories</p>
                </div>
                <div style={{ marginTop: "15%" }}>
                  <p>Uncategorized (11) </p>
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Blog;
