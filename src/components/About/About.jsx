import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return <section id='about' className={styles.container}>
    <dev className={styles.aboutImg}>
      <img src={getImageUrl('about/about.png')}>
      </img>
    </dev>
    <dev className={styles.aboutText}>
      <h2>About <span>Me</span></h2>
      <h4>Freelancer</h4>
      <p>
        For over 5+ years, I've been working on and off on a variety of projects, with a focus on mastering my web development skills.
        <br />
        I was always passionate about technology, design and art and I think that my work experience, skill set, and services that I offer proves that more then anything.
        <br />
        When it comes to technology and my workflow, I have a steady source of motivation that drives me to do my very best.
        <br />
        My work, and really life motto always has been, as Mark Twain once said:
        <br />
        <div className={styles.spanDiv}>
          <span className={styles.aboutSpan}> "Find a job you enjoy doing, and you will never have to work a day in your life."</span>
        </div>
      </p>
    </dev>
  </section>;
};
