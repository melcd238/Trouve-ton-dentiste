import React from 'react';
import styles from './CardPresentation.module.css';
import DentistPic from '../../../Assets/dentiste.jpg';


function CardPresentation() {
  return (
    <div className={styles.CardPresentationContainer}>
        <div className={styles.title}>
           <h1>Trouvez le dentiste le plus proche de chez vous</h1>
           <div className={styles.titleDecoration}></div>
        </div>
        
         <div className={styles.img}>
            <img src={DentistPic} alt="par mohamed Hassan de Pixabay"></img>
         </div>
         <div className={styles.paragraphes}>
            <p>Vous cherchez un dentiste? Vous êtes au bon endroit!<br/>
            Sélectionnez votre région, <span>puis</span> votre département et <span>enfin</span> votre commune.<br/>
            Si votre commune n'est pas dans la liste, c'est que malheureusement aucun dentiste n'y exerce. Dans ce cas, regardez les communes autour de chez vous,
            vous pourriez y trouver votre bonheur! </p>
         </div>
    </div>
  )
}

export default CardPresentation