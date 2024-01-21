import React from 'react'
import styles from './Contact.module.css';

export const Contact = () => {
  return <section id='contact' className={styles.container}>
    <div className={styles.contactText}>
        <h2>Contact <span>Me</span></h2>
        <h4>Have any project on your mind?</h4>
        <p>Look no further and contact me! Let me make your ides come to life!</p>
        <div className={styles.List}>
            <li><a href="mailto:owlsly94@proton.me">Email me!</a></li>
        </div>
        <div className={styles.contactIcons}>
            <a href='https://github.com/owlsly94'>
                <box-icon name='github' type='logo' color='#2a2a2a' ></box-icon>
            </a>
            <a href='https://www.instagram.com/st_hikker'>
                <box-icon name='instagram' type='logo' color='#2a2a2a' ></box-icon>
            </a>
        </div>
    </div>
  </section>;
};