import { useState, useEffect } from 'react';
// import Image from 'next/image'
// import * as Scroll from 'react-scroll';
import { scrollToEle } from '../utils/scroll'
import PortraitSVG from '../components/PortraitSVG';
import styles from '../styles/Welcome.module.scss';

export default function Welcome() {
    const [textShow, setTextShow] = useState(false);
    const [removeType, setRemoveType] = useState(false);
    const [linkImageShow, setLinkImageShow] = useState(false);
    // const scroller = Scroll.scroller;
    // const ScrollLink = Scroll.Link;

    // const scrollToEle = (elementName: string) => {
    //     scroller.scrollTo(elementName, {
    //         duration: 500,
    //         delay: 100,
    //         smooth: true,
    //     })
    // }


    useEffect(()=>{
        const changeStyle = () => {
            setTextShow(true);
            setRemoveType(true)
        }
        const finishAni = () => {
            setLinkImageShow(true)
        }
        setTimeout(changeStyle, 1500)
        setTimeout(finishAni, 2900)
    }, [])

    return (
        <div
            className={styles.welcomeDiv}>
            <div
                className={[styles.welcome_message, styles.typewriter].join(' ')}
                >
                <p className={
                    removeType ?
                        [styles.welcomeToP, styles.removeType].join(' ')
                        :
                        styles.welcomeToP
                }>Welcome to</p><br />
                {/* <h1 className={styles.visibility_hidden}>TOMO's Portfolio</h1><br /> */}
                <h1
                    className={
                    textShow ?
                        styles.siteTitleH1
                    :
                        [styles.siteTitleH1,styles.visibility_hidden].join(' ')
                }>TOMO's Portfolio</h1><br />
                <div
                    className={
                        linkImageShow ?
                            styles.go_home
                            :
                            [styles.go_home,styles.visibility_hidden].join(' ')
                    }
                    onClick={() => scrollToEle('profile')}
                >
                    Look into it
                </div>
            </div>
            <div>
                {
                    linkImageShow ?
                    <>
                        <div
                            className={[styles.index_portrait, styles.opacity_zero].join(' ')}
                        >
                            <img
                                // width={50}
                                // height={100}
                                src="/images/portrait.png"
                                alt="Tomo portrait" />
                        </div>
                        <div
                            className={[styles.index_portrait_line, styles.opacity_zero].join(' ')}
                        // className={[styles.index_portrait_line, styles.opacity_zero].join(' ')}
                        >
                            <PortraitSVG />
                        </div>
                    </>
                    : null
                }
            </div>
        </div>
    )
}
