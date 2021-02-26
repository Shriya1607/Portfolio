import Header from "./Pages/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroCard from "./Pages/HeroCard";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact"
import Bottom from "./Pages/Bottom"

function App() {
  return (
    <>
      <div className="mb-5">
        <Header />
        <HeroCard />
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Bottom/>
      </div>
    </>
  );
}

export default App;
