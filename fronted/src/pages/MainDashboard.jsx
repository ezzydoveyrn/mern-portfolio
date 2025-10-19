import { JoystickIcon, SlashIcon, ViewIcon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import About from '../components/About';
import Partners from '../components/Partners';

function MainDashboard() {
  return (
    <div className="h-full w-full p-4 text-white">
      <About />
      <Partners />
      <div id="services" className="w-full h-screen text-white">
        <Services />
      </div>
      <div id="reviews" className="w-full h-screen text-white">
        <Reviews />
      </div>
      <div id="contact" className="w-full h-screen text-white">
        <Contact />
      </div>
    </div>
  );
}

export default MainDashboard