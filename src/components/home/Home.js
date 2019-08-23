import React from 'react';
import './Home.scss';
import Hero from './hero/Hero';
import About from './about/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
