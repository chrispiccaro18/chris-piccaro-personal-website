import React from 'react';
import './Home.scss';
import Hero from './hero/Hero';
import About from './about/About';
import Projects from './projects/Projects';
import Resume from './resume/Resume';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Resume />
    </main>
  );
}
