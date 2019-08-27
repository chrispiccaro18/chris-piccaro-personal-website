import React from 'react';
import styles from './Header.scss';

import { scroller } from 'react-scroll';

export default function Header() {
  return (
    <header className={styles.Header}>
      <nav>
        <a onClick={scrollToElement} name="hero">
          <div className="nav-button">
            <h3>home</h3>
          </div>
        </a>
        <a onClick={scrollToElement} name="about">
          <div className="nav-button">
            <h3>about</h3>
          </div>
        </a>
        <a onClick={scrollToElement} name="projects">
          <div className="nav-button">
            <h3>projects</h3>
          </div>
        </a>
        <a onClick={scrollToElement} name="resume">
          <div className="nav-button">
            <h3>resume</h3>
          </div>
        </a>
      </nav>
    </header>
  );
}

const scrollToElement = target => {
  scroller.scrollTo(target.currentTarget.name);
};
