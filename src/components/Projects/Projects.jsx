import React from 'react'
import styles from './Projects.module.css';
import { getImageUrl } from '../../utils';

export const Projects = () => {
  return <section id='projects' className={styles.container}>
    <div className={styles.mainText}>
        <p>My Work</p>
        <h2>Latest<span> Projects</span></h2>
    </div>
    <div className={styles.projectContent}>
        <div className={styles.projectRow}>
            <img id='imgProject' src={getImageUrl('projects/project1.png')}></img>
            <div className={styles.Layer}>
                <h5>EMR System in Python</h5>
                <p>Simple Electronic medical record (EMR) system</p>
                <a href='https://github.com/owlsly94/clinic_project'>
                    <box-icon name='link-external' color='#50fa7b' ></box-icon>
                </a>
            </div>
        </div>
        <div className={styles.projectRow}>
            <img id='imgProject' src={getImageUrl('projects/project2.png')}></img>
            <div className={styles.Layer}>
                <h5>EMR System in Java</h5>
                <p>Currently working on the project.</p>
                <a href='https://github.com/owlsly94/emr_project_java'>
                    <box-icon name='link-external' color='#50fa7b' ></box-icon>
                </a>
            </div>
        </div>
        <div className={styles.projectRow}>
            <img id='imgProject' src={getImageUrl('projects/project3.png')}></img>
            <div className={styles.Layer}>
                <h5>Sudoku</h5>
                <p>Simple sudoku project in JS</p>
                <a href='https://owlsly94.github.io/sudoku/'>
                    <box-icon name='link-external' color='#50fa7b' ></box-icon>
                </a>
            </div>
        </div>
        <div className={styles.projectRow}>
            <img id='imgProject' src={getImageUrl('projects/project4.png')}></img>
            <div className={styles.Layer}>
                <h5>Memory Game</h5>
                <p>Simple memory game written in JS</p>
                <a href='https://owlsly94.github.io/memory_game/'>
                    <box-icon name='link-external' color='#50fa7b' ></box-icon>
                </a>
            </div>
        </div>
        <div className={styles.projectRow}>
            <img id='imgProject' src={getImageUrl('projects/project5.png')}></img>
            <div className={styles.Layer}>
                <h5>Quiz</h5>
                <p>Simple Quiz game in JS.</p>
                <a href='https://owlsly94.github.io/quiz_game/'>
                    <box-icon name='link-external' color='#50fa7b' ></box-icon>
                </a>
            </div>
        </div>
    </div>
  </section>;
};
