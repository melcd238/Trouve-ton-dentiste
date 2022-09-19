import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.jpg';



function Header() {
  return (
    <header>
        <div className={styles.upHeader}>

            <div className={styles.logo}>
                 <p>Trouve Ton Dentiste</p>
                 <div className={styles.logoImg}>
                  <img src={Logo} alt="logo de trouve ton dentiste"></img>
                 </div>
            </div>

            <nav>
               <Link to="/">Home</Link>
            </nav>

        </div>

    </header>
  )
}

export default Header