import React from 'react'
import styles from './Footer.module.css';

export const Footer = () => {
  return <section className={styles.container}>
    <div className={styles.lastText}>
        <p>© 2023 by Stefan Stanimirovic <span>Owlsly</span></p>
    </div>
  </section>;
};