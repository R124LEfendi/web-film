import { Card, Col, Container, Row, Image } from "react-bootstrap";
import spiderman from "../assets/images/superhero/spiderman.jpg";
import darkKnight from "../assets/images/superhero/tdk.jpg";
import theAvenger from "../assets/images/superhero/theavengers.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage ">
              <Image
                src={spiderman}
                alt="spiderman the movie "
                className="imagesuper"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    SPIDERMAN NO WAY HOME
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage ">
              <Image
                src={darkKnight}
                alt="Interstellar the movie "
                className="imagesuper"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    THE DARK KNIGHT
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage ">
              <Image
                src={theAvenger}
                alt="Avatar the movie "
                className="imagesuper"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">TH AVENGERS</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>{" "}
          <Col md={4} className="movieWrapper">
            <Card className="movieImage ">
              <Image
                src={spiderman}
                alt="spiderman the movie "
                className="imagesuper"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    SPIDERMAN NO WAY HOME
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage ">
              <Image
                src={darkKnight}
                alt="Interstellar the movie "
                className="imagesuper"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    THE DARK KNIGHT
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage ">
              <Image
                src={theAvenger}
                alt="Avatar the movie "
                className="imagesuper"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">TH AVENGERS</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
