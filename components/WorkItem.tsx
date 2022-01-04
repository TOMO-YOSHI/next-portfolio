import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/WorkItem.module.scss';

interface Props {
    wor: any
}

// export default function WorkItem({wor}: Props) {
const WorkItem: React.FC<Props> = ({wor}) => {
    return (
        <div>
            <div className={styles.imageDiv}>
                <Image
                    src={wor?.image ? wor.image : '/images/no-image-available.png'}
                    width={170}
                    height={100}
                />
            </div>

            <div className={styles.infoDiv}>
                <h3>{wor.name}</h3>
            </div>

            <div className={styles.linkDiv}>
                <Link href={`/works/${wor.id}`}>
                    <a>Details</a>
                </Link>
            </div>
        </div>
    )
}

export default WorkItem;
