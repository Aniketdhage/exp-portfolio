// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import { Skills } from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Experiance from "./components/Experiance";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experiance />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
