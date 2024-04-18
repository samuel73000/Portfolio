import Header from "./page/Home/Header";
import Footer from "./page/Home/Footer";
import HomeHero from "./page/Home/Home-Hero";
import About from "./page/Home/About";
import Projects from "./page/Home/Projects";
import Contact from "./page/Home/Contact";
import i18n from './Trad';
import { I18nextProvider } from 'react-i18next';

function App() {
  return (
    <div className="App">
       <I18nextProvider i18n={i18n}>
      <Header />
      <HomeHero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      </I18nextProvider>
    </div>
  );
}
export default App;
