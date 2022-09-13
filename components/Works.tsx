import { useState, useEffect } from 'react';
import { scrollToEle } from '../utils/scroll';
import { FaTools, FaGithubAlt, FaBriefcase } from 'react-icons/fa';
import { IconContext } from "react-icons";
import WorkItem from '../components/WorkItem';
import Modal from './Modal';
import { Work } from '../types/work';
import axios from 'axios';
import { API_URL } from '../config'
import styles from '../styles/Works.module.scss';

export default function Works() {
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [works, setWorks] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedWork, setSelectedWork] = useState<Work | null>(null);

    const openModal = (work: Work): void => {
        setShowModal(true);
        setSelectedWork(work)
    }

    useEffect(() => {
        (async () => {
            const apiConfig = {
                method: 'GET',
                url: `/api/works`
            };

            // console.log('API_URL', API_URL);
            // console.log('apiConfig', apiConfig);

            const res = await axios(apiConfig);
            // console.log('res', res);
            const works = res.data.filter((el: Work) => el.public === true);
            setWorks(works);
        })()
    }, [])

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
            </div>
            {
                works.length === 0 &&
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
                        onMouseOver={() => setHover(true)}
                        onMouseOut={() => setHover(false)}
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
                        onMouseOver={() => setHover2(true)}
                        onMouseOut={() => setHover2(false)}
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
                </div>
            }
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