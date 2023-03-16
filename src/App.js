// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Courses from "./components/Courses";
import Testimonials from "./components/testimonials";
import HowToApply from "./components/howToApply";
import Faq from "./components/faq";
import Posts from "./components/posts";
import Confirm from "./components/Confirm";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Courses />
      <Testimonials />
      <HowToApply />
      <Faq />
      <Posts />
      <Confirm />
      <Footer />
    </div>
  );
}

export default App;
