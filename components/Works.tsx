import React from 'react';
import { scrollToEle } from '../utils/scroll';
import styles from '../styles/Works.module.scss';

export default function Works() {
    return (
        <div
            className={styles.worksDiv}
        >
            <h2
                onClick={() => scrollToEle('works')}
            >Works</h2>
            <div
                onClick={() => scrollToEle('contact')}
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
