import React from 'react';
import styles from './CardDentiste.module.css';
import { FcBusinesswoman ,FcManager } from 'react-icons/fc';
import { FaUserCircle } from "react-icons/fa"

function CardDentiste(props) {
  console.log(props)
const displayAvatar = ()=>{
  const styleAvatar ={fontSize:"90px"}
  if(props.civilite === "Femme"){
    return(
      <FcBusinesswoman style={styleAvatar}/>
    )
  }else if(props.civilite === "Homme"){
     return(
      <FcManager style={styleAvatar}/>
     )
  }else{
     return(
      <FaUserCircle style={styleAvatar}/>
     )
  }
}

  return (
    <div className={styles.CardDentistContainer}>

      <div className={styles.CardDentistContainerAvatar}>
        <div className={styles.CardDentistAvatar}>
             {displayAvatar()}
        </div>
        <div className={styles.CardDentistSesam}>
            <p>{props.convention}</p>
            <p>{props.vital}</p>
        </div>

      </div>
      <div className={styles.CardDentistContainerProfil}>
          <h1>Dr {props.name}</h1>
          <h2>{props.label} <span>({props.type_exercice})</span></h2>
          <p><span>Adresse:</span><br/> {props.adresse}</p>
          <p><span>N° de téléphone:</span> {props.tel}</p>
          <p className={styles.typeActe}><span>Types d'actes:</span> {props.type_acte}.</p>
      </div>
      <div className={styles.CardDentistContainerGeolocalisation} >
                geolocalisation
      </div>
     
    </div>
  )
}

export default CardDentiste