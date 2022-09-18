import React, {useState} from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './SearchBar.module.css';
import { FaChevronCircleDown,FaChevronCircleUp} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Region } from '../../utils/data/region';


function SearchBar() {
  const[isOpenRegion, setIsOpenRegion]=useState(false);
  const [isOpenDept, setIsOpenDept]=useState(false);
  const[input, setInput]=useState({
    region:"",
    dept:"",
    commune:""
  });

  const toggling = (option)=> {
      switch (option) {
        case "REGION":
              setIsOpenRegion(!isOpenRegion)
          break;
        case "DEPT":
            setIsOpenDept(!isOpenDept)
        break;  
      
        default:
          break;
      }
  };
  const getRegionValue = (event)=>{
    event.preventDefault();
    setInput({ region : event.target.dataset.value})
    setIsOpenRegion(false);
  }



  return (
    <div className={styles.searchInput}>

      <div className={styles.dropDown}>
        <div className={styles.inputRegion}  onClick={()=>toggling("REGION")}>{input.region !== "" ? `${input.region}` : "Selectionnez votre région"}</div>
        <div className={styles.inputWhereIcons}>{isOpenRegion ? <FaChevronCircleUp/> :<FaChevronCircleDown/>}</div>
        {isOpenRegion ?
              <div className={styles.inputRegionVisible}>
                <ul>
                  {Region.map((item)=>{
                    return (
                      <li key={item.id} data-value={item.nom_reg} onClick={getRegionValue}>{item.nom_reg}</li>
                    )
                  })}
                </ul>
              </div>
                      
        : null} 
       </div>

       <div className={styles.dropDown} onClick={()=>toggling("DEPT")}>
       <div type="text" className={styles.inputDept}>Sélectionnez votre département</div>
       <div className={styles.inputWhereIcons}>{isOpenDept ? <FaChevronCircleUp/> :<FaChevronCircleDown/>}</div>
       </div>


      <div className={styles.inputWhereContainer}>
      <input type="text" className={styles.inputWhere} placeholder="Dans quelle commune?"/>
       <div className={styles.inputWhereIcons} > <FaMapMarkerAlt/> </div>
      </div>
      <div className={styles.searchInputLogo}><ImCross/></div>
    </div>
  )
}

export default SearchBar;