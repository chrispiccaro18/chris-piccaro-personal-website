import React from 'react';
import styles from './Resume.scss';

import { Element } from 'react-scroll';

export default function Resume() {
  return (
    <section className={styles.Resume}>
      <Element name="resume">
        <h2 className="section-header text">resume</h2>
        <div className="resume-img-container">
          <a href="https://drive.google.com/file/d/1OL5RKHlbDDKM2QTqaHyMPCUD6TC0tfiw/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src="../../assets/images/chris-piccaro-resume-08-2019.jpg" alt="resume" />
          </a>
        </div>
      </Element>
    </section>
  );
}
