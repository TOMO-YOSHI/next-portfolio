import { useState } from 'react';
import { scrollToEle } from '../utils/scroll';
import { FaTools, FaGithubAlt, FaBriefcase } from 'react-icons/fa';
import { IconContext } from "react-icons";
import WorkItem from '../components/WorkItem';
import Modal from './Modal';
import ModalContentsWork from '../components/ModalContentsWork'
import { Work } from '../types/work'
import styles from '../styles/Works.module.scss';

export default function Works({works}) {
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);

    // console.log('works', works)

    const openModal = (work: Work): void => {
        setShowModal(true);
        setSelectedWork(work)
    }

    return (
        <div
            className={styles.worksDiv}
        >
            <h2
                onClick={() => scrollToEle('works')}
            >Works</h2>
            <div className={styles.worksGridDiv}>
                {
                    works.map((work: Work )=> (
                        <WorkItem
                            key={work.id}
                            work={work}
                            openModal={() => openModal(work)} />
                    ))
                }
                {/* <div className={styles.each_work}>
                    <img src={"https://images.ctfassets.net/cggsnbtxpwpk/2Xb0FRp1NupD7xFn3rAkcR/49d028ce967bd57d04a9779f6dab2dc2/savy.png"} alt={"Savy"} />
                        <h3>{"Savy / React Website"}</h3>
                        <div className={styles.work_description}>
                            <p>Core technology</p>
                            <ul>
                                <li>React</li>&nbsp;
                                <li>Redux</li>&nbsp;
                                <li>Google Maps</li>&nbsp;
                                <li>Material UI</li>&nbsp;
                            </ul>
                        </div>
                        <a href={"link"}>
                            <div className={styles.see_more}>
                                <p>See more</p>
                            </div>
                        </a>
                </div>
                <div className={styles.each_work}>
                    <img src={"https://images.ctfassets.net/cggsnbtxpwpk/2Xb0FRp1NupD7xFn3rAkcR/49d028ce967bd57d04a9779f6dab2dc2/savy.png"} alt={"Savy"} />
                        <h3>{"Savy / React Website"}</h3>
                        <div className={styles.work_description}>
                            <p>Core technology</p>
                            <ul>
                                <li>React</li>&nbsp;
                                <li>Redux</li>&nbsp;
                                <li>Google Maps</li>&nbsp;
                                <li>Material UI</li>&nbsp;
                            </ul>
                        </div>
                        <a href={"link"}>
                            <div className={styles.see_more}>
                                <p>See more</p>
                            </div>
                        </a>
                </div>
                <div className={styles.each_work}>
                    <img src={"https://images.ctfassets.net/cggsnbtxpwpk/2Xb0FRp1NupD7xFn3rAkcR/49d028ce967bd57d04a9779f6dab2dc2/savy.png"} alt={"Savy"} />
                        <h3>{"Savy / React Website"}</h3>
                        <div className={styles.work_description}>
                            <p>Core technology</p>
                            <ul>
                                <li>React</li>&nbsp;
                                <li>Redux</li>&nbsp;
                                <li>Google Maps</li>&nbsp;
                                <li>Material UI</li>&nbsp;
                            </ul>
                        </div>
                        <a href={"link"}>
                            <div className={styles.see_more}>
                                <p>See more</p>
                            </div>
                        </a>
                </div>
                <div className={styles.each_work}>
                    <img src={"https://images.ctfassets.net/cggsnbtxpwpk/2Xb0FRp1NupD7xFn3rAkcR/49d028ce967bd57d04a9779f6dab2dc2/savy.png"} alt={"Savy"} />
                        <h3>{"Savy / React Website"}</h3>
                        <div className={styles.work_description}>
                            <p>Core technology</p>
                            <ul>
                                <li>React</li>&nbsp;
                                <li>Redux</li>&nbsp;
                                <li>Google Maps</li>&nbsp;
                                <li>Material UI</li>&nbsp;
                            </ul>
                        </div>
                        <a href={"link"}>
                            <div className={styles.see_more}>
                                <p>See more</p>
                            </div>
                        </a>
                </div> */}
            </div>
            {/* <div className={styles.comingSoonDiv}>
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
                <div
                    className={styles.githubLink}
                    onMouseOver={()=>setHover2(true)}
                    onMouseOut={()=>setHover2(false)}
                >
                    <a href="https://tomohiroyoshida.com/works.html" target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider
                            value={{
                                style: {
                                    width: "24px",
                                    height: "24px",
                                    color: hover2 ? "orange" : "white",
                                    cursor: "pointer"
                                }
                            }}>
                            <FaBriefcase />
                        </IconContext.Provider>
                        <p>Previous Portfolio</p>
                    </a>
                </div>
            </div> */}
            <div
                onClick={() => scrollToEle('contact')}
                className={styles.nextSection}>
                Next{' '}
                <span
                    className={styles.rotateAni}>
                    {'>>'}
                </span>
            </div>
            <Modal
                show={showModal}
                onClose={()=>setShowModal(false)}
                title={null}>
                {/* <ModalContentsWork selectedWork={selectedWork} /> */}
                <h2 className={styles.workNameH2}>{selectedWork?.name}</h2>
                <div className={styles.modalContentsDiv}>
                    <>
                        <div
                            id="visual_div"
                            className={selectedWork?.youtubeIframe ? "video-container" : null}>
                            {
                                selectedWork?.youtubeIframe ?
                                    <>
                                        <iframe
                                            src={selectedWork?.youtubeIframe}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            width="560"
                                            height="315"
                                            allowFullScreen></iframe>
                                    </>
                                    :
                                    <>
                                        {/* <p>Image</p> */}
                                        <img src={selectedWork?.image.url} alt={selectedWork?.image.alt} />
                                    </>
                            }
                        </div>
                    </>
                    <div className={styles.each_work_description}>
                        <p className={styles.orange}>Core Technology</p>
                        <ul>
                            {
                                selectedWork?.coreTechnology.map((el, i) => (
                                    <><li key={i}>{el}</li>&nbsp;</>
                                ))
                            }
                        </ul>

                        <p className={styles.about_this_work}>About this Work</p>
                        <p>{selectedWork?.description}</p>

                        <div className={styles.work_links}>
                            {
                                selectedWork?.webPageUrl ? 
                                    <p><a href={selectedWork?.webPageUrl} target="_blank" rel="noreferrer">Visit the Actual Web Page</a></p>
                                    :
                                    ""
                            }
                            {
                                selectedWork?.githubUrl ?
                                    <p><a href={selectedWork?.githubUrl} target="_blank" rel="noreferrer">Look into the Code (Go to GitHub)</a></p>
                                    :
                                    <p className="orange">Sorry Github is private !</p>
                            }
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}