// import Link from 'next/link';
import { useState } from 'react';
import * as Scroll from 'react-scroll';
import HamburgerMenu from '../components/HamburgerMenu'
import styles from '../styles/Header.module.scss';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const scroller = Scroll.scroller;
    // const ScrollLink = Scroll.Link;

    const scrollToEle = (elementName: string) => {
        scroller.scrollTo(elementName, {
            duration: 500,
            delay: 100,
            smooth: true,
            // containerId: 'ContainerElementID',
            // offset: 50, // Scrolls to element + 50 pixels down the page
        })
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                {/* <Link href='/'>
                    <a>TOMO's Portfolio</a>
                </Link> */}
            </div>

            <HamburgerMenu
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen} />
            {
                menuOpen ?
                    <div
                        className={
                            menuOpen ?
                                [styles.global_nav_div, styles.slide_in_from_top].join(' ')
                                :
                                [styles.global_nav_div, styles.slide_up_to_top].join(' ')
                        }
                    >
                        <nav className={styles.global_nav}>
                            <ul>
                                {/* <li>
                                    <div
                                        onClick={() => scrollToEle("welcome")}>
                                        <a>Top</a>
                                    </div>
                                </li> */}
                                <li>
                                    <div
                                        onClick={() => scrollToEle("profile")}>
                                        <a>Profile</a>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        onClick={() => scrollToEle("skills")}>
                                        <a>Skills</a>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        onClick={() => scrollToEle("experience")}>
                                        <a>Experience</a>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        onClick={() => scrollToEle("works")}>
                                        <a>Works</a>
                                    </div>
                                </li>
                                <li>
                                    <div
                                        onClick={() => scrollToEle("contact")}>
                                        <a>Contact</a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    : null
            }
        </header>
    )
}
