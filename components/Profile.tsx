import React from 'react';
import { scrollToEle } from '../utils/scroll';
import Zoom from 'react-reveal/Zoom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";
import styles from '../styles/Profile.module.scss';

export default function Profile() {
    return (
        <div
            className={styles.profileDiv}
        >
            <h2
                onClick={() => scrollToEle('profile')}
            >Profile</h2>
            <Zoom>
                <div className={styles.aboutDiv}>
                    {/* <h3>About TOMO</h3> */}
                    <div>
                        <p>Hello, I am Tomohiro Yoshida.</p>
                        <p>I am a <span className={styles.orange}>Full-Stack Web Developer</span> who has working experience in a Canadian start-up company and a design agency. I am proficient in serverless system architecture, front-end development, and DevOps. Through projects, I have implemented advanced features in web development, such as a video call with WebRTC, real-time update/notification with WebSocket, authentication/authorization, and so on.</p>
                    </div>
                </div>
            </Zoom>
            <div className={styles.iconsDiv}>
                <div className={styles.githubIconDiv}>
                    <a href="https://github.com/TOMO-YOSHI" target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider
                            value={{
                                style: {
                                    width: "32px",
                                    height: "32px",
                                    color: "white",
                                    cursor: "pointer"
                                }
                            }}>
                            <FaGithub />
                        </IconContext.Provider>
                    </a>
                </div>
                <div className={styles.linkedinIconDiv}>
                    <a href="https://www.linkedin.com/in/tomohiro/" target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider
                            value={{
                                style: {
                                    width: "32px",
                                    height: "32px",
                                    color: "white",
                                    cursor: "pointer"
                                }
                            }}>
                            <FaLinkedin />
                        </IconContext.Provider>
                    </a>
                </div>
            </div>
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
