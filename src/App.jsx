import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutSkills from './components/AboutSkills/AboutSkills';
import Projects from './components/Projects/Projects';
import Journey from './components/Journey/Journey';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSkills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
