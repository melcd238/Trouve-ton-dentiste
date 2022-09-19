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



function Home() {
const[idRegion,setIdRegion]=useState(null);
const[depts,setDepts]=useState(null);
const[com, setCom] = useState(null);
const[input, setInput]=useState({
  region:null,
  dept:null,
  commune:null
});
const[isOpenRegion, setIsOpenRegion]=useState(false);
const [isOpenDept, setIsOpenDept]=useState(false);
const[isOpenCom,setIsOpenCom]=useState(false);
const [filteredDentists, setFilteredDentists]= useState([]);


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
  setInput({...input,region : event.target.dataset.value})
  setIsOpenRegion(false);
  setIdRegion(id)
}
const getDeptValue = (event)=>{
   event.preventDefault();
   setInput({...input,dept : event.target.dataset.value})
   setIsOpenDept(false);
}
const getComValue = (event)=>{
  event.preventDefault();
  setInput({...input,commune : event.target.dataset.value})
  setIsOpenCom(false);
}

const dropDownDept = ()=>{
  if(idRegion !== null){
    const result = Depts.find(elt => elt.id_reg === idRegion);
    setDepts(result.depts)
  }

}

useEffect(()=>{
dropDownDept()
},[idRegion,depts])

useEffect(()=>{
if(input.region !== null && input.dept !== null){
getCommunes(input.region , input.dept).then((resp)=>{
  setCom(resp.facet_groups[9].facets)
}).catch((error)=>{
  console.log(error)
})
}
},[input]);

useEffect(()=>{
  
    getFilteredDentist(input.region,input.dept,input.commune ).then((resp)=>{
      console.log(resp.records)
      const result = resp.records
      setFilteredDentists(result)
    }).catch((error)=>{
      console.log(error)
    })


},[])


const searchInputs = ()=>{
  return (
    <div className={styles.searchInput}>

      <div className={styles.dropDown}>
        <div className={styles.inputRegion}  onClick={()=>toggling("REGION")}>{input.region !== null ? `${input.region}` : "Selectionnez votre région"}</div>
        <div className={styles.inputWhereIcons}>{isOpenRegion ? <FaChevronCircleUp/> :<FaChevronCircleDown/>}</div>
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
       <div className={styles.inputDept} onClick={()=>toggling("DEPT")}>{input.dept !== null ? `${input.dept}` : "Selectionnez votre département"}</div>
       <div className={styles.inputWhereIcons}>{isOpenDept ? <FaChevronCircleUp/> :<FaChevronCircleDown/>}</div>
       {isOpenDept && depts !== null ? 
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
      <div type="text" className={styles.inputWhere} onClick={()=>toggling("COM")} >{input.commune !== null ? `${input.commune}` : "Selectionnez votre commune"}</div>
      <div className={styles.inputWhereIcons}>{isOpenCom ? <FaChevronCircleUp/> :<FaChevronCircleDown/>}</div>
       <div className={styles.inputWhereIconsMap} > <FaMapMarkerAlt/> </div>
     
       {isOpenCom && com !== null ?
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

    {input.region !== null && input.dept !== null && input.commune !==null ? 
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
      {filteredDentists.length <= 0 ?
         <CardPresentation/>
       : 
       <p>dentsites</p>
       }

    </main>
  )
}

export default Home