import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
import styles from '../styles/WorkItem.module.scss';
import { Work } from '../pages/api/works/utils';

interface Props {
    work: Work;
    openModal(): void;
}

// export default function WorkItem({wor}: Props) {
const WorkItem: React.FC<Props> = ({work, openModal}) => {
    return (
        <div className={styles.each_work}>
            <img src={work.image.url} alt={work.image.alt} />
            <h3>{work.name}</h3>
            <div className={styles.work_description}>
                <p>Core technology</p>
                <ul>
                    {
                        work.coreTechnology.map(el => (
                            <><li>{el}</li>&nbsp;</>
                        ))
                    }
                </ul>
            </div>
            {/* <a href={"link"}> */}
                <div className={styles.see_more} onClick={openModal}>
                    <p>See more</p>
                </div>
            {/* </a> */}
        </div>
        // <div>
        //     <div className={styles.imageDiv}>
        //         <Image
        //             src={wor?.image ? wor.image : '/images/no-image-available.png'}
        //             width={170}
        //             height={100}
        //         />
        //     </div>

        //     <div className={styles.infoDiv}>
        //         <h3>{wor.name}</h3>
        //     </div>

        //     <div className={styles.linkDiv}>
        //         <Link href={`/works/${wor.id}`}>
        //             <a>Details</a>
        //         </Link>
        //     </div>
        // </div>
    )
}

export default WorkItem;
