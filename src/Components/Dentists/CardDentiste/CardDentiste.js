import React from 'react';
import styles from './CardDentiste.module.css';
import { FcBusinesswoman ,FcManager } from 'react-icons/fc';
import { FaUserCircle } from "react-icons/fa";
import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function CardDentiste(props) {
 
const styleMaps={color:" #355B6D",fontSize:"30px"}
const GeolocalisationComponent = ({ text })=> <div>{text}</div>
const defaultProps = {
  center: {
    lat: props.coordonnees[0],
    lng: props.coordonnees[1]
  },
  zoom: 15
};

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
      <div className={styles.CardDentistContainerGeolocalisation} style={{ height: '100%', width: '30%' }} >
      <GoogleMapReact
        bootstrapURLKeys={{ key:process.env.REACT_APP_GOOGLE_MAPS_KEY , libraries: ['visualization']}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({map, maps}) => map.visualization}
        yesIWantToUseGoogleMapApiInternals
       
      >
        <GeolocalisationComponent lat={props.coordonnees[0]} lng={props.coordonnees[1]} text={<FaMapMarkerAlt style={styleMaps}/>}/>
        </GoogleMapReact>
      </div>
     
    </div>
  )
}

export default CardDentiste