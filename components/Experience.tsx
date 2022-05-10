import { useRef, useState, useCallback, useEffect }from 'react';
import { scrollToEle } from '../utils/scroll';
import styles from '../styles/Experience.module.scss';

export default function Experience() {
    const ref = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sectionComponentTop, setSectionComponentTop] = useState(10000);
    const [startAnimation, setStartAnimation] = useState(false);

    const getOffsettop = useCallback(
        () => {
            if(!ref) return;
            const { offsetTop } = ref.current;
            setSectionComponentTop(offsetTop)
        },
        [ref],
    );

    const handleScroll = useCallback(
        () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        },
        [],
    )

    useEffect(() => {
        const getPosition = () => {
            handleScroll();
            getOffsettop();
        };
        window.addEventListener("scroll", getPosition);
        // window.addEventListener("resize", getOffsettop);

        return () => {
            window.removeEventListener("scroll", getPosition);
            // window.removeEventListener("resize", getOffsettop);
        };
    }, []);

    // useEffect(() => {
    //     console.log('scrollPosition: ', scrollPosition);
    // }, [scrollPosition]);

    // useEffect(() => {
    //     console.log('sectionComponentTop: ', sectionComponentTop);
    // }, [sectionComponentTop]);

    useEffect(()=>{
        if (scrollPosition + 600 < sectionComponentTop){
            // console.log(true)
            setStartAnimation(false);
        }
        if (scrollPosition + 40 >= sectionComponentTop){
            // console.log(true);
            setStartAnimation(true);
        }
    }, [scrollPosition, sectionComponentTop])



    return (
        <div
            ref={ref}
            className={styles.experienceDiv}
            onScroll={getOffsettop}
        >
            <h2
                onClick={() => scrollToEle('experience')}
            >Experience</h2>
            <div className={styles.sectionMain}>
                {
                    startAnimation ?
                    <>
                        <div className={styles.verticalLine} />
                        <div className={styles.firstDot} />
                        <div className={styles.secondDot} />
                        <div className={styles.thirdDot} />
                        <div className={styles.firstDiv}>
                            <h3>Front End Web Developer</h3>
                            <p>Design & Marketing Agency (AB, Canada)</p>
                            <p>2022.5 ~ Present</p>
                        </div>
                        <div className={styles.secondDiv}>
                            <h3>Lead / Full Stack Software Developer</h3>
                            <p>Robotics Company (BC, Canada)</p>
                            <p>2021.7 ~ 2022.5</p>
                        </div>
                        <div className={styles.thirdDiv}>
                            <h3>Web and Mobile App Design and Development</h3>
                            <p>Studied at Langara College (Vancouver, Canada)</p>
                            <p>2020.1 ~ 2021.4</p>
                        </div>
                    </>
                    : null
                }
            </div>
            <div
                onClick={() => scrollToEle('works')}
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
