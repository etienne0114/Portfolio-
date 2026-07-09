import Navbar from "./components/Navbar.jsx";
import Starfield from "./components/Starfield.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Research from "./components/Research.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function Wireframe({ className }) {
  // icosahedron-style wireframe, echoing the reference art
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g stroke="rgba(245,245,240,0.5)" strokeWidth="0.6">
        <polygon points="100,8 178,64 148,166 52,166 22,64" />
        <polygon points="100,52 138,80 124,124 76,124 62,80" />
        <line x1="100" y1="8" x2="100" y2="52" />
        <line x1="178" y1="64" x2="138" y2="80" />
        <line x1="148" y1="166" x2="124" y2="124" />
        <line x1="52" y1="166" x2="76" y2="124" />
        <line x1="22" y1="64" x2="62" y2="80" />
        <line x1="100" y1="52" x2="124" y2="124" />
        <line x1="138" y1="80" x2="76" y2="124" />
        <line x1="62" y1="80" x2="124" y2="124" />
      </g>
    </svg>
  );
}

export default function App() {
  return (
    <>
      <div className="bg-scene" aria-hidden="true">
        <Starfield />
        <Wireframe className="wire wire-a" />
        <Wireframe className="wire wire-b" />
      </div>
      <div className="side-rail" aria-hidden="true">
        Software · AI · IoT — Portfolio
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Research />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
