import { Card, Col, Container, Row, Image } from "react-bootstrap";
import interImage from "../assets/images/trending/interstellar.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="movieImage">
            <Card className=" text-dark text-center movieImage ">
              <Image src={interImage} alt="Interstellar the movie " />

              <Card.Title>Interstellar</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
