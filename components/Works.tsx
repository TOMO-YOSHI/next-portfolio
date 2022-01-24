import { useState } from 'react';
import { scrollToEle } from '../utils/scroll';
import { FaTools, FaGithubAlt } from 'react-icons/fa';
import { IconContext } from "react-icons";
// import BgAnimationSection from '../components/BgAnimationSection';
import styles from '../styles/Works.module.scss';

export default function Works() {
    const [hover, setHover] = useState(false);

    return (
        <div
            className={styles.worksDiv}
        >
            {/* <BgAnimationSection /> */}
            <h2
                onClick={() => scrollToEle('works')}
            >Works</h2>
            <div className={styles.comingSoonDiv}>
                <div className={styles.comingSoon}>
                    <IconContext.Provider
                        value={{
                            style: {
                                width: "32px",
                                height: "32px",
                                color: "white",
                            }
                        }}>
                        <FaTools />
                    </IconContext.Provider>
                    <p>Coming Soon...</p>
                </div>
                <div
                    className={styles.githubLink}
                    onMouseOver={()=>setHover(true)}
                    onMouseOut={()=>setHover(false)}
                >
                    <a href="https://github.com/TOMO-YOSHI" target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider
                            value={{
                                style: {
                                    width: "24px",
                                    height: "24px",
                                    color: hover ? "orange" : "white",
                                    cursor: "pointer"
                                }
                            }}>
                            <FaGithubAlt />
                        </IconContext.Provider>
                        <p>Go to GitHub</p>
                    </a>
                </div>
            </div>
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
