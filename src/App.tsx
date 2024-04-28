import "./i18n/config";
import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Educations from "./components/sections/Education";

function App() {
  return (
    <main>
   
      <Header />
      <div className="border: 0.5px solid #ccc padding: 10px"></div>;

      <AboutMe />
      <div className="border: 0.5px solid #ccc padding: 10px"></div>;

      <Skills />
      <div className="border: 0.5px solid #ccc padding: 10px"></div>;

      <Projects />
      <div className="border: 0.5px solid #ccc padding: 10px"></div>;

      <Experience />
      <div className="border: 0.5px solid #ccc padding: 10px"></div>;
      <Educations />

      <Footer />
    </main>
  );
}

export default App;
