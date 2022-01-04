import Link from 'next/link';
import styles from '../styles/Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    <a>TOMO's Portfolio</a>
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>Welcome</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/profile'>
                            <a>Profile</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/works'>
                            <a>Works</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/skills'>
                            <a>Skills</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact'>
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
