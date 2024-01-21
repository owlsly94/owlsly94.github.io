import React from 'react'
import styles from './Home.module.css';
import backgroundImage from '../../../assets/home/background.jpg';

export const Home = () => {
  return <section id='home' className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className={styles.content}>
      <div className={styles.slide}>
        <span className={styles.one}>Hello</span>
        <span className={styles.two}>I'm</span>
      </div>
      <h1>Stefan Stanimirovic</h1>
      <h3>Free<span>lancer</span></h3>
      <p>Full-Stack Developer, Linux System Admin and Pentester
          <br />
          with 5+ years of experience and dozen of satified customers.</p>
      <div className={styles.divButton}>
        <a href='mailto:owlsly94@proton.me' className={styles.contactBtn}>Hire me</a>
      </div>
    </div>
  </section>;
};
