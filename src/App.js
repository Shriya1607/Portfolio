import Header from "./Pages/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroCard from "./Pages/HeroCard";
import AboutMe from "./Pages/AboutMe";
import Skills from "./Pages/Skills";

function App() {
  return (
    <>
      <div className="mb-5">
        <Header />
        <HeroCard />
        <AboutMe />
        <Skills />
      </div>
    </>
  );
}

export default App;
