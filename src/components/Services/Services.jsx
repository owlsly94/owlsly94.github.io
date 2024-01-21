import React from 'react'
import styles from './Services.module.css';
import { getImageUrl } from '../../utils';

export const Services = () => {
  return <section id='services' className={styles.container}>
      <div className={styles.mainText}>
        <p>What I do</p>
        <h2><span>My</span> Services</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.Box}>
          <div className={styles.servicesIcons}>
          <img className={styles.Icons} src={getImageUrl('skills/web.png')}></img>
          </div>
          <h3>Web Development</h3>
          <p>
            I do both front-end and back end development.
            In consultations with you, I'll plan and design your dream website and send you my design for approval.
            On the front-end, I mostly work with all most-used JavaScript frameworks, such as Angular, React, Meteor, Vue, Next, Ember.
            Once the front-end project is done, again in consultations with You,
            I'll accurately implement the business logic of your web app on the back end.
            I rely on proven and familiar frameworks, and ensure fast and quality coding in Django, Node.js and PHP.
            I do everything, from personal websites to e-commerce stores.
          </p>
        </div>
        <div className={styles.Box}>
          <div className={styles.servicesIcons}>
            <img className={styles.Icons} src={getImageUrl('skills/admin.png')}></img>
          </div>
          <h3>System Administration</h3>
          <p>
            Unix/Linux systems administrator with experience configuring,
            monitoring, upgrading and maintaining systems hardware, software
            and related network infrastructure.
            Strong analytical skills; able to work with technicians
            from various engineering disciplines to troubleshoot complex system-level issues.
            Created and optimized Unix shell scripts using Bash shells and Python scripts.
          </p>
        </div>
        <div className={styles.Box}>
          <div className={styles.servicesIcons}>
          <img className={styles.Icons} src={getImageUrl('skills/penetration.png')}></img>
          </div>
          <h3>Penetration Testing</h3>
          <p>
            With your permission, I'll discover and exploit vulnerabilities in your network
            just like a real-world attacker would.
            Through Penetration Testing service will identify weak points in your system
            so that I can patch the system with security enhancements and prevent future vulnerabilities.
          </p>
        </div>
      </div>
      <div className={styles.skillsTitle}>
        <div className={styles.mainText}>
          <p>
            What can I do
          </p>
          <h2><span>My</span> Skills</h2>
        </div>
      </div>
      <div className={styles.circleContent}>
        <div className={styles.Circle}>
            <img src={getImageUrl('skills/html.png')}></img>
            <h2 className={styles.title}>HTML</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/css.png')}></img>
          <h2 className={styles.title}>CSS</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/js.png')}></img>
          <h2 className={styles.title}>Javascript</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/react.png')}></img>
          <h2 className={styles.title}>REACT</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/nodejs.png')}></img>
          <h2 className={styles.title}>Node.js</h2>
        </div>
      </div>
      <div className={styles.circleContent}>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/mongo.png')}></img>
          <h2 className={styles.title}>MongoDB</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/python.png')}></img>
          <h2 className={styles.title}>Python</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/django.png')}></img>
          <h2 className={styles.title}>Django</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/php.png')}></img>
          <h2 className={styles.title}>PHP</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/vue.png')}></img>
          <h2 className={styles.title}>Vue.js</h2>
        </div>
      </div>
      <div className={styles.circleContent}>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/sql.png')}></img>
          <h2 className={styles.title}>SQL</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/java.png')}></img>
          <h2 className={styles.title}>Java</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/typescript.png')}></img>
          <h2 className={styles.title}>Typescript</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/git.png')}></img>
          <h2 className={styles.title}>Git</h2>
        </div>
        <div className={styles.Circle}>
          <img src={getImageUrl('skills/bash.png')}></img>
          <h2 className={styles.title}>Bash</h2>
        </div>
      </div>
    </section>;
};
