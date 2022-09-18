import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';


function Header() {
  return (
    <header>
        <div className={styles.upHeader}>

            <div className={styles.logo}>
                 <p>Trouve Ton Dentiste</p>
            </div>

            <nav>
               <Link to="/">Home</Link>
            </nav>

        </div>
        <div className={styles.DownHeader}>
           <SearchBar/>
        </div>

    </header>
  )
}

export default Header