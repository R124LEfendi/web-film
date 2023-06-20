import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand className="nbText" href="/">
            {" "}
            RIZAL FILMS
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="navText" href="#trending">
              TRENDING
            </Nav.Link>
            <Nav.Link className="navText" href="#superhero">
              SUPERHERO
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
