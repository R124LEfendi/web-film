import { Card, Col, Container, Row, Image } from "react-bootstrap";
import interImage from "../assets/images/trending/incepion.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="movieWrapper">
            <Card className="bg-dark  movieImage ">
              <Image src={interImage} alt="Interstellar the movie " />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Interstellar</Card.Title>
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

          <Col className="movieWrapper">
            <Card className="bg-dark  movieImage ">
              <Image src={interImage} alt="Interstellar the movie " />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Interstellar</Card.Title>
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

          <Col className="movieWrapper">
            <Card className="bg-dark  movieImage ">
              <Image src={interImage} alt="Interstellar the movie " />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Interstellar</Card.Title>
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
