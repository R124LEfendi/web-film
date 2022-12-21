import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <div>
          <Container>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* end of intro */}
    </div>
  );
}

export default App;
