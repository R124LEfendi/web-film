import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className="navText">RIZAL FILMS</Navbar.Brand>
          <Nav>
            <Nav.Link className="navText">TRENDING</Nav.Link>
            <Nav.Link className="navText">SUPERHERO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
