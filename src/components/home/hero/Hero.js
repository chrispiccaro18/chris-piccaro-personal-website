import React from 'react';
import styles from './Hero.scss';

import { Element } from 'react-scroll';

export default function Home() {
  return (
    <section className={styles.Hero}>
      <Element name="hero">
        <div className="hero-text">
          <h1 className="text">chris piccaro</h1>
          <h2 className="text">full stack developer<span id="blink">_</span></h2>
        </div>
      </Element>
    </section>
  );
}
