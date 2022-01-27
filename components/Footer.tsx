import * as Scroll from 'react-scroll';
import styles from '../styles/Footer.module.scss';

const Footer = () => {

    const scrollToTop = () => {
        Scroll.animateScroll.scrollToTop({
            duration: 500,
            delay: 100,
            smooth: true,
        })
    }

    return (
        <footer className={styles.footer}>
            <p
                onClick={scrollToTop}
                className={styles.goToTopP}>Go to Top</p>
            <p>&copy; 2022 Tomohiro Yoshida. All Rights Reserved</p>
        </footer>
    )
}

export default Footer
