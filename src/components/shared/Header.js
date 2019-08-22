import React from 'react';
import styles from './Header.css';

export default function Header() {
  return (
    <header style={styles}>
      <nav>
        <a href="#hero">
          <div className="nav-button">
            <h3>home</h3>
          </div>
        </a>
        <a href="#about">
          <div className="nav-button">
            <h3>about</h3>
          </div>
        </a>
        <a href="#projects">
          <div className="nav-button">
            <h3>projects</h3>
          </div>
        </a>
        <a href="#resume">
          <div className="nav-button">
            <h3>resume</h3>
          </div>
        </a>
      </nav>
    </header>
  );
}
