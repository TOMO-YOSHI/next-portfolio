import React from 'react'
import styles from '../styles/HamburgerMenu.module.scss'

interface Props {
    menuOpen: boolean;
    setMenuOpen(bool: boolean): void 
}

const HamburgerMenu: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {

    return (
        <div
            className={styles.hamburger_wrap}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            <div
                className={
                    menuOpen ?
                        [styles.nav_icon, styles.open].join(' ')
                        :
                        styles.nav_icon
                }>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default HamburgerMenu;