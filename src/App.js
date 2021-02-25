import Header from "./Pages/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroCard from "./Pages/HeroCard";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";

function App() {
  return (
    <>
      <div className="mb-5">
        <Header />
        <HeroCard />
        <AboutMe />
        <Skills />
        <Experience />
      </div>
    </>
  );
}

export default App;
