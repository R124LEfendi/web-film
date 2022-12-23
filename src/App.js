import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
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

      {/* trending */}
      <div className="trending">
        <Trending />
      </div>
      {/* trending end */}
    </div>
  );
}

export default App;
