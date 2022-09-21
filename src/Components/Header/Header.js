import React from 'react';
import styles from './Header.module.css';

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

        </div>

    </header>
  )
}

export default Header