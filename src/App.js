import { Toaster } from "react-hot-toast";
import ScrollToTop from "react-scroll-to-top";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HomeMain from "./Components/HomeMain";
import Navber from "./Components/Navber";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import SocialLink from "./Components/SocialLink";

function App() {
  return (
    <div>
      <Navber></Navber>
      <HomeMain></HomeMain>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>

      <SocialLink></SocialLink>
      <ScrollToTop smooth top="200" width="40" height="25" color="gray" />
      <Toaster />
    </div>
  );
}

export default App;
