import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss';

interface Props {
    title?: string;
    keywords?: string;
    description?: string;
    // children: JSX.Element | JSX.Element[];
    children: JSX.Element | Array<JSX.Element | JSX.Element[]>;
}

const Layout: React.FC<Props> = ({title, keywords, description, children}) => {
    return (
        <div>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/Digit/Digit.ttf"
                    as="font"
                    crossOrigin=""
                />
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>

            <Header />

            <div className={styles.container}>
                {children}
            </div>

            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    title: 'TOMO\'s Portfolio',
    description: 'This is the tomohiro\'s portfolio website.',
    keywords: 'tomohiro, yoshida, web development, engineer, portfolio, jobs'
}

export default Layout;
