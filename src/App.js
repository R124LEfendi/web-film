import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}
    </div>
  );
}

export default App;
