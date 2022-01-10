import React from 'react';
import { scrollToEle } from '../utils/scroll';
import styles from '../styles/Skills.module.scss';

export default function Skills() {
    return (
        <div
            className={styles.skillsDiv}
        >
            <h2
                onClick={() => scrollToEle('skills')}
            >Skills</h2>
            <div
                onClick={() => scrollToEle('experience')}
                className={styles.nextSection}>
                Next{' '}
                <span
                    className={styles.rotateAni}>
                    {'>>'}
                </span>
            </div>
        </div>
    )
}
