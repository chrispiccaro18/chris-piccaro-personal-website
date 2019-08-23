import React from 'react';
import styles from './Hero.scss';

export default function Home() {
  return (
    <section className={styles.Hero}>
      <div className="hero-text">
        <h1 className="text">chris piccaro</h1>
        <h2 className="text">full stack developer<span id="blink">_</span></h2>
      </div>
    </section>
  );
}
