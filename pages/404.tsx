import { FaExclamationTriangle } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/404.module.scss';

export default function NotFoundPage() {
    return (
        <Layout title="Page Not Found">
            <div className={styles.errorDiv}>
                <div className={styles.h1Div}>
                    <IconContext.Provider
                        value={{
                            style: {
                                width: "32px",
                                height: "32px",
                                color: "#00FF00",
                            }
                        }}>
                        <FaExclamationTriangle />
                    </IconContext.Provider>
                    &nbsp;&nbsp;
                    <h1>404</h1>
                </div>
                <h4>Sorry, there is nothing here.</h4>
                <Link href='/'><a>Go Back Home</a></Link>
            </div>
        </Layout>
    )
}
