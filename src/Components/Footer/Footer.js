import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
       <p className={styles.firstPfooter}>©2022 - <span>Trouve ton dentiste</span> - Tous droits réservés</p>
       <p className={styles.secondPfooter}>Réalisé par Mélaïna Donati</p>
    </footer>
  )
}

export default Footer