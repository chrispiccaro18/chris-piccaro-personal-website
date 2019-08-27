import React from 'react';
import styles from './About.scss';

import { Element } from 'react-scroll';

export default function About() {
  return (
    <section className={styles.About}>
      <Element name="about" id="about-scroll">
        <h2 className="section-header text">about</h2>
        <div className="section-text text">
          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Aliquam ut porttitor leo a diam sollicitudin. Eget velit aliquet sagittis id consectetur. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Cursus sit amet dictum sit amet justo donec enim diam.
          </p>
        </div>
      </Element>
    </section>
  );
}
