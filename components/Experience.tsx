import React from 'react';
import { scrollToEle } from '../utils/scroll';
import styles from '../styles/Experience.module.scss';

export default function Experience() {
    return (
        <div
            className={styles.experienceDiv}
        >
            <h2
                onClick={() => scrollToEle('experience')}
            >Experience</h2>
            <div
                onClick={() => scrollToEle('works')}
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
