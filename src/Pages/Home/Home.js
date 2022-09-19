import React, { useState, useEffect} from 'react';
import styles from './Home.module.css';
import SearchBar from '../../Components/SearchBar/SearchBar';


function Home() {


  return (
    <main>
      <section className={styles.searchContainer}>
             <SearchBar/>
      </section>
    </main>
  )
}

export default Home