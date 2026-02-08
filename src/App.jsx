import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import About from './components/About';
import TextReveal from './components/TextReveal';
import Services from './components/Services';
import CreateSection from './components/CreateSection';
import Awards from './components/Awards';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Clients from './components/Clients';
import Vibe from './components/Vibe';
import Contact from './components/Contact';
import CursorAura from './components/CursorAura';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

import HeroBackground3D from './components/HeroBackground3D';
import Marquee from './components/Marquee';

import StudioIntro from './components/StudioIntro';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContact = () => setIsContactOpen(!isContactOpen);

  return (
    <div className="app-main">
      <SmoothScroll />
      <CursorAura />
      <Navbar onContactClick={toggleContact} />

      {/* 3D Background Wrapper for Intro Sections */}
      <div style={{ position: 'relative' }}>
        <HeroBackground3D style={{ position: 'sticky', top: 0, height: '100vh', zIndex: 0 }} />
        <div style={{ position: 'relative', zIndex: 1, marginTop: '-100vh' }}>
          <Hero onContactClick={toggleContact} />
          <StudioIntro onContactClick={toggleContact} />
          <Marquee />
          <Showreel />
        </div>
      </div>

      <About />
      <TextReveal />
      <Services />
      <CreateSection />
      <Awards />
      <WhyUs />
      <Process />
      <Clients />
      <Vibe />
      <Contact onContactClick={toggleContact} />
      <Footer />

      <ContactModal isOpen={isContactOpen} onClose={toggleContact} />
    </div>
  );
}

export default App;
