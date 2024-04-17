import Header from "./page/Home/Header";
import Footer from "./page/Home/Footer";
import HomeHero from "./page/Home/Home-Hero";
import About from "./page/Home/About";
import Projects from "./page/Home/Projects";
import Contact from "./page/Home/Contact";
function App() {
  return (
    <div className="App">
      <Header />
      <HomeHero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
