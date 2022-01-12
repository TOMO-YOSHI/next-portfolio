import React from 'react';
import { scrollToEle } from '../utils/scroll';
import * as Scroll from 'react-scroll';
import styles from '../styles/Contact.module.scss';

export default function Contact() {

    const scrollToTop = () => {
        Scroll.animateScroll.scrollToTop({
            duration: 500,
            delay: 100,
            smooth: true,
        })
    }

    return (
        <div
            className={styles.contactDiv}
        >
            <h2
                onClick={() => scrollToEle('contact')}
            >Contact</h2>
            <div
                onClick={scrollToTop}
                className={styles.nextSection}>
                Go Back To Top{' '}
                <span
                    className={styles.rotateAni}>
                    {'<<'}
                </span>
            </div>
        </div>
    )
}
