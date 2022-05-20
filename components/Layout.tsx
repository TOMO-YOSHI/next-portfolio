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
        <div className={styles.layoutDiv}>
            <Head>
                <meta property="og:image" content="https://tomo-portfolio.s3-us-west-2.amazonaws.com/portfolio_social_media_image.png" />
                <meta property="og:url" content="https://tomohirodev.com" />
                <meta property="og:title" content="TOMO'S Portfolio" />
                <meta property="og:description" content="This is Tomohiro's portfolio site to showcase web development skills." />
                <link
                    rel="preload"
                    href="/fonts/Digit/Digit.ttf"
                    as="font"
                    crossOrigin=""
                />
                <title>{title}</title>
                <meta name="twitter:card" content="summary_large_image" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
                <link rel="icon" type="image/png" href="./images/portfolio.png" />
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
