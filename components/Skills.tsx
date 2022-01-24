import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
import { scrollToEle } from '../utils/scroll';
import SkillsList from '../components/SkillsList';
import styles from '../styles/Skills.module.scss';

const imagesLogo = [
    "/images/tech-logo/html.png",
    "/images/tech-logo/css.png",
    "/images/tech-logo/js.png",
    "/images/tech-logo/react.png",
    "/images/tech-logo/react-native-logo.png",
    "/images/tech-logo/Nextjs-logo.svg",
    "/images/tech-logo/redux-logo.png",
    "/images/tech-logo/JQuery-Logo.svg.png",
    "/images/tech-logo/128px-Sass_Logo_Color.png",
    "/images/tech-logo/nodejs-logo.png",
    "/images/tech-logo/256px-Amazon_Web_Services_Logo.png",
    "/images/tech-logo/Expressjs.png",
    "/images/tech-logo/ts-logo-256.png",
    "/images/tech-logo/GraphQL_Logo.png",
    "/images/tech-logo/Moby-logo.png",
    "/images/tech-logo/logo-mysql-170x115.png",
    "/images/tech-logo/firebase.png",
    "/images/tech-logo/contentful.png",
    "/images/tech-logo/jest.svg",
    "/images/tech-logo/testing-library.png",
    "/images/tech-logo/256px-Figma-logo.png",
    "/images/tech-logo/128px-WordPress_W_Mark.png",
]

declare global {
    interface Window {
        platform: any;
    }
}

export default function Skills() {
    const [showList, setShowList] = useState(false);
    const [logos] = useState([...imagesLogo, ...imagesLogo, ...imagesLogo]);
    const [reversedLogos] = useState([...imagesLogo.reverse(), ...imagesLogo, ...imagesLogo]);
    const [browser, setBrowser] = useState("");

    useEffect(() => {
        // console.log(window.platform.name);
        setBrowser(window.platform.name)
    }, [])

    return (
        <div
            className={styles.skillsDiv}
        >
            <h2
                onClick={() => scrollToEle('skills')}
            >Skills</h2>
            <div className={styles.container}>
                <div className={[styles.imagebanner, styles.imagebannerAnimation].join(' ')}>
                    {
                        browser !== "Safari" && logos.map((el, i) => (
                            <img key={i} src={el} alt={el} />
                            // <div
                            //     key={i}
                            //     style={{ height: "80px", width: "100%", display: "inline-block"}}
                            //     // style={{display: "block"}}
                            // >
                            //     <Image
                            //         quality="50"
                            //         objectFit="scale-down"
                            //         layout="fill"
                            //         src={el}
                            //         alt={el}
                            //     />
                            // </div>
                        ))
                    }
                </div>
                <div className={[styles.imagebannerSecond, styles.imagebannerSecondAnimation].join(' ')}>
                    {
                        browser !== "Safari" && reversedLogos.map((el, i) => (
                            <img key={i} src={el} alt={el} />
                        ))
                    }
                </div>
                <div className={[styles.imagebannerThird, styles.imagebannerThirdAnimation].join(' ')}>
                    {
                        browser !== "Safari" && logos.map((el, i) => (
                            <img key={i} src={el} alt={el} />
                        ))
                    }
                </div>
                {
                    browser === "Safari" &&
                    (
                        <>
                            <div className={[styles.imagebanner, styles.imagebannerStatic].join(' ')}>
                                {
                                    imagesLogo.map((el, i) => (
                                        <img key={i} src={el} alt={el} />
                                    ))
                                }
                            </div>
                            <div className={[styles.imagebannerSecond, styles.imagebannerSecondStatic].join(' ')}>
                                {
                                    imagesLogo.map((el, i) => (
                                        <img key={i} src={el} alt={el} />
                                    ))
                                }
                            </div>
                            <div className={[styles.imagebannerThird, styles.imagebannerThirdStatic].join(' ')}>
                                {
                                    imagesLogo.map((el, i) => (
                                        <img key={i} src={el} alt={el} />
                                    ))
                                }
                            </div>
                        </>
                    ) 
                }
            </div>
            {
                showList ?
                    <div
                        onClick={() => setShowList(prev => !prev)}
                        className={styles.modal}>
                        <SkillsList />
                    </div>
                    :
                    <div className={styles.buttonDiv}>
                        <button
                            className={styles.button}
                            onClick={() => setShowList(prev => !prev)}
                        >Open List</button>
                    </div>
            }
            <div
                onClick={() => scrollToEle('experience')}
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

                    // <figure>
                    //     <img src="/images/tech-logo/html.png" alt="html logo"/>
                    //         <figcaption>HTML</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/css.png" alt="css logo"/>
                    //         <figcaption>CSS</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/js.png" alt="JS logo"/>
                    //         <figcaption>JavaScript</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/react.png" alt="React logo"/>
                    //         <figcaption>React</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/react-native-logo.png" alt="React Native logo"/>
                    //         <figcaption>React Native</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/Nextjs-logo.svg" alt="nextjs logo"/>
                    //         <figcaption>Next</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/redux-logo.png" alt="redux logo"/>
                    //         <figcaption>Redux</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/JQuery-Logo.svg.png" alt="jQuery logo" className="skills_background_white"/>
                    //         <figcaption>jQuery</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/128px-Sass_Logo_Color.png" alt="sass logo"/>
                    //         <figcaption>SASS</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/nodejs-logo.png" alt="Node.js logo"/>
                    //         <figcaption>Node.js</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/256px-Amazon_Web_Services_Logo.png" alt="AWS logo" className="skills_background_white"/>
                    //         <figcaption>AWS</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/Expressjs.png" alt="express logo" className="skills_background_white"/>
                    //         <figcaption>express</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/ts-logo-256.png" alt="TypeScript logo"/>
                    //         <figcaption>TypeScript</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/GraphQL_Logo.png" alt="GraphQL logo"/>
                    //         <figcaption>GraphQL</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/Moby-logo.png" alt="docker logo"/>
                    //         <figcaption>Docker</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/logo-mysql-170x115.png" alt="MySQL logo" className="skills_background_white"/>
                    //         <figcaption>MySQL</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/firebase.png" alt="firebase logo"/>
                    //         <figcaption>firebase</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/contentful.png" alt="Contentful logo"/>
                    //         <figcaption>Contentful</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/jest.svg" alt="Jest logo"/>
                    //         <figcaption>Jest</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/testing-library.png" alt="testing library logo"/>
                    //         <figcaption>testing library</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/256px-Figma-logo.png" alt="Figma logo"/>
                    //         <figcaption>Figma</figcaption>
                    // </figure>
                    // <figure>
                    //     <img src="/images/tech-logo/128px-WordPress_W_Mark.png" alt="WP logo" className="skills_background_white"/>
                    //         <figcaption>WordPress</figcaption>
                    // </figure>

