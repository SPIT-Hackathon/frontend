import authContext from '@/hooks/AuthContext/authContext';
import Link from 'next/link'
import React, { useContext } from 'react'
import styles from "../../styles/PageNavbar.module.css"

const PageNavbar = () => {
    const { user, logout } = useContext(authContext);
    const handleLogout = () => {
        logout();
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.subnav}>
                <Link href="/" passHref>
                    <h2>StudyPat</h2>
                </Link>
                <div className={styles.login}>
                    {!user && (
                        <Link href="/sign-in" passHref>
                            <button className={styles.login_button}>SignIn</button>
                        </Link>
                    )}
                    {user && (
                        <button onClick={handleLogout} className={styles.login_button}>Logout</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PageNavbar