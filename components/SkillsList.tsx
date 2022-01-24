import { useState, useEffect } from 'react';
import styles from '../styles/SkillsList.module.scss';

export default function SkillsList() {
    const [showLine, setShowLine] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setShowLine(true);
        }, 1000);
    }, [])

    return (
        <div className={showLine ? [styles.skillsListDiv, styles.line].join(' ') : styles.skillsListDiv}>
            <div className={styles.topLine}></div>
            <div className={styles.rightLine}></div>
            <div className={styles.bottomLine}></div>
            <div className={styles.leftLine}></div>
            {/* <div className={showLine ? [styles.line, styles.topLine].join(' ') : styles.topLine}></div>
            <div className={showLine ? [styles.line, styles.rightLine].join(' ') : styles.rightLine}></div>
            <div className={showLine ? [styles.line, styles.bottomLine].join(' ') : styles.bottomLine}></div>
            <div className={showLine ? [styles.line, styles.leftLine].join(' ') : styles.leftLine}></div> */}
            <div>
                <h3>Front-end</h3>
                <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>HTML/CSS</li>
                    <li>ReactJS</li>
                    <li>NextJS</li>
                    <li>Redux</li>
                    <li>SASS</li>
                    <li>jQuery</li>
                </ul>
            </div>
            <div>
                <h3>Back-end</h3>
                <ul>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>GraphQL</li>
                    <li>Firebase</li>
                    <li>Python</li>
                    <li>AWS</li>
                    <li>
                        <ul>
                            <li>Lambda</li>
                            <li>API gateway</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <h3>Infrastructure</h3>
                <ul>
                    <li>Docker</li>
                    <li>Terraform</li>
                    <li>AWS</li>
                    <li>
                        <ul>
                            <li>EC2</li>
                            <li>S3</li>
                            <li>ECS</li>
                            <li>ECR</li>
                            <li>RDS</li>
                            <li>Cognito</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
