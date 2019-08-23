import React from 'react';
import styles from './Projects.scss';

import { Element } from 'react-scroll';

export default function Projects() {
  return (
    <section className={styles.Projects}>
      <Element name="projects">
        <h2 className="section-header text">projects</h2>
        <ul id="project-list">
          <li>
            <img className="arrow" src="./src/assets/icons/_ionicons_svg_md-arrow-dropleft-circle.svg" alt="back" />
          </li>
          <li className="project-card">
            <h3>mega nap</h3>
            <img src="./src/assets/images/mega-nap.png" alt="project image" />
            <div>
              <a href="https://www.meganap.com" target="_blank" rel="noopener noreferrer">live site</a>
              <span>|</span>
              <a href="https://github.com/grandpapi" target="_blank" rel="noopener noreferrer">code</a>
            </div>
            <p>Mega Nap is the easiest way to make a fullstack application without having to write a lick of backend code.</p>
          </li>
          <li>
            <img className="arrow" src="./src/assets/icons/_ionicons_svg_md-arrow-dropright-circle.svg" alt="forward" />
          </li>
        </ul>
      </Element>
    </section>
  );
}
