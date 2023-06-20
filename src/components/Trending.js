import { Card, Col, Container, Row, Image } from "react-bootstrap";
import Inceptionk from "../assets/images/trending/Inceptionk.jpg";
import interstellar from "../assets/images/trending/interstellar.jpg";
import avatar from "../assets/images/trending/avatar.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image
                src={Inceptionk}
                alt="Inception the movie "
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INCEPTION</Card.Title>
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
                src={interstellar}
                alt="Interstellar the movie "
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INTERSTELLAR</Card.Title>
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
              <Image src={avatar} alt="Avatar the movie " className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVATAR</Card.Title>
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
                src={Inceptionk}
                alt="Inception the movie "
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INCEPTION</Card.Title>
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
                src={interstellar}
                alt="Interstellar the movie "
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INTERSTELLAR</Card.Title>
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
            <Card className=" movieImage ">
              <Image src={avatar} alt="Avatar the movie " className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">AVATAR</Card.Title>
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

export default Trending;
