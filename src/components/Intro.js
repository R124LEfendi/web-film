import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-gold text-center d-flex justify-content-center align-item-center ">
        <Row>
          <Col>
            <div className="title">Nonton gratis</div>
            <div className="title">Anti krisis</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark">Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
