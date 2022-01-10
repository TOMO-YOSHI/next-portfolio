import React from 'react';
import { scrollToEle } from '../utils/scroll';
import styles from '../styles/Profile.module.scss';

export default function Profile() {
    return (
        <div
            className={styles.profileDiv}
        >
            <h2
                onClick={() => scrollToEle('profile')}
            >Profile</h2>
            <div
                onClick={() => scrollToEle('skills')}
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
