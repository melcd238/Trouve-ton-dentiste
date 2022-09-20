import React, { useState, useEffect} from 'react';
import styles from './Home.module.css';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { FaChevronCircleDown,FaChevronCircleUp} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Region } from '../../utils/data/region';
import {  Depts} from '../../utils/data/depts';
import { getCommunes } from '../../utils/Api';
import { getFilteredDentist} from '../../utils/Api';
import CardPresentation from '../../Components/Dentists/CardPresentation/CardPresentation';
import Logo from '../../Assets/logo.jpg';
import CardDentiste from '../../Components/Dentists/CardDentiste/CardDentiste';



function Home() {
const[idRegion,setIdRegion]=useState(null);
const[depts,setDepts]=useState([]);
const[com, setCom] = useState([]);
const[inputRegion, setInputRegion]=useState("");
const [inputDept, setInputDept]=useState("");
const [inputCommune, setInputCommune]=useState("");
const[isOpenRegion, setIsOpenRegion]=useState(false);
const [isOpenDept, setIsOpenDept]=useState(false);
const[isOpenCom,setIsOpenCom]=useState(false);
const [filteredDentists, setFilteredDentists]= useState([]);

const styleCrossRegion ={color:"white"}

const toggling = (option)=> {
    switch (option) {
      case "REGION":
            setIsOpenRegion(!isOpenRegion)
        break;
      case "DEPT":
          setIsOpenDept(!isOpenDept)
      break; 
      case "COM":
        setIsOpenCom(!isOpenCom)
      break;   
    
      default:
        break;
    }
};
const getRegionValue = (event, id)=>{
  event.preventDefault();
  if(inputRegion === "" || inputRegion === event.target.dataset.value){
  setInputRegion(event.target.dataset.value)
  setIsOpenRegion(false);
  setIdRegion(id)
  }else if(inputRegion !== event.target.dataset.value){
  setInputRegion(event.target.dataset.value)
  setIsOpenRegion(false);
  setIdRegion(id);
  setInputDept("");
  setInputCommune("");
  }
}
const getDeptValue = (event)=>{
   event.preventDefault();
   if(inputDept === "" || inputDept === event.target.dataset.value){
   setInputDept(event.target.dataset.value)
   setIsOpenDept(false);
  }else if(inputDept !== event.target.dataset.value){
    setInputDept(event.target.dataset.value)
   setIsOpenDept(false);
   setInputCommune("");
}
}
const getComValue = (event)=>{
  event.preventDefault();
  setInputCommune(event.target.dataset.value)
  setIsOpenCom(false);
}



const resetForm = ()=>{
  setInputRegion("");
  setInputDept("");
  setInputCommune("");
  setIdRegion(null);
  setDepts([]);
  setCom([]);
  setFilteredDentists([]);
}

useEffect(()=>{
  const dropDownDept = ()=>{
    if(idRegion !== null){
      const result = Depts.find(elt => elt.id_reg === idRegion);
      setDepts(result.depts)
    }
  }  
dropDownDept()
},[idRegion,depts])

useEffect(()=>{
if(inputRegion !== "" && inputDept !== ""){
getCommunes(inputRegion, inputDept).then((resp)=>{
  setCom(resp.facet_groups[9].facets)
}).catch((error)=>{
  console.log(error)
})
}
},[inputRegion,inputDept]);

useEffect(()=>{
  
    getFilteredDentist(inputRegion,inputDept,inputCommune ).then((resp)=>{
      console.log(resp.records)
      const result = resp.records
      setFilteredDentists(result)
    }).catch((error)=>{
      console.log(error)
    })


},[inputRegion,inputDept,inputCommune])


const searchInputs = ()=>{
  return (
    <div className={styles.searchInput}>

      <div className={styles.dropDown}>
        <div className={styles.inputRegion}  onClick={()=>toggling("REGION")}>{inputRegion !== "" ? `${inputRegion}` : "Selectionnez votre région"}</div>
        <div className={styles.inputWhereIcons}>{isOpenRegion ? <FaChevronCircleUp/> :<FaChevronCircleDown/>}</div>
        {inputRegion !== "" && inputDept !== "" && inputCommune !== "" && 
        <div className={styles.inputRegionIconsCross} onClick={()=>resetForm()}><ImCross style={styleCrossRegion}/></div>
        }
        {isOpenRegion ?
              <div className={styles.inputRegionVisible}>
                <ul>
                  {Region.map((item)=>{
                    return (
                      <li key={item.id} data-value={item.nom_reg} onClick={(e)=>getRegionValue(e,item.id)}>{item.nom_reg}</li>
                    )
                  })}
                </ul>
              </div>
                      
        : null} 
       </div>

       <div className={styles.dropDown}>
       <div className={styles.inputDept} onClick={()=>toggling("DEPT")}>{inputDept !== "" ? `${inputDept}` : "Selectionnez votre département"}</div>
       <div className={styles.inputWhereIcons}>{isOpenDept ? <FaChevronCircleUp/> :<FaChevronCircleDown/>}</div>
       {isOpenDept && !depts.length <= 0 ? 
        <div className={styles.inputDeptVisible}>
        <ul>
          {depts.map((item)=>{
            return(
              <li key={item} data-value={item} onClick={(e)=>getDeptValue(e,item)}>{item}</li>
            )
          })}
        
        </ul>
      </div>
         : null }
       </div>


      <div className={styles.inputWhereContainer}>
      <div type="text" className={styles.inputWhere} onClick={()=>toggling("COM")} >{inputCommune !== "" ? `${inputCommune}` : "Selectionnez votre commune"}</div>
      <div className={styles.inputWhereIcons}>{isOpenCom ? <FaChevronCircleUp/> :<FaChevronCircleDown/>}</div>
       <div className={styles.inputWhereIconsMap} > <FaMapMarkerAlt/> </div>
     
       {isOpenCom && !com.length <=0 ?
        <div className={styles.inputComVisible}>
        <ul>
        {com.map((item)=>{
                    return (
                      <li key={item.name} data-value={item.name} onClick={(e)=>getComValue(e,item.name)}>{item.name}</li>
                    )
                  })}
          
        </ul>
      </div>
       : null
      }
      </div>

    {inputRegion !== "" && inputDept !== "" && inputCommune !== "" ? 
    <div className={styles.searchInputLogo}><FaSearch/></div>
    :
    <div className={styles.searchInputLogo}><ImCross/></div>
    }
      
    </div>
  )
}





  return (
    <main>
      <section className={styles.searchContainer}>
             {searchInputs()}
      </section>
      {filteredDentists && filteredDentists.length <=0 ?
         <div className={styles.CardPresentationContainer}>
            <CardPresentation/>  
         </div>
          
       : 
       <section className={styles.dentistsListContainer}>
            <div className={styles.logoDentistsList}>
              <img src={Logo} alt="logo dent pouce levé"></img>
            </div>
            <div>
              {filteredDentists.map((elt)=>{
                return (<CardDentiste key={elt.recordid}
                                      name={elt.fields.nom} 
                                      convention={elt.fields.convention}
                                      label={elt.fields.libelle_profession}
                                      tel={elt.fields.telephone}
                                      civilite={elt.fields.civilite}
                                      adresse={elt.fields.adresse}
                                      vital={elt.fields.sesam_vitale}
                                      type_exercice={elt.fields.nature_exercice}
                                      coordonnees={elt.fields.coordonnees}
                                      type_acte={elt.fields.types_actes}
                                      />) 
              })}
            </div>
       </section>
      }

    </main>
  )
}

export default Home