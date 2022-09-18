import React, { useState, useEffect} from 'react'
import { getFilteredDentist } from '../../utils/Api'

function Home() {
  const[filteredDentists, setFilteredDentists] = useState();

 /* useEffect(()=>{
    getFilteredDentist().then((resp)=>{
       console.log(resp)
    }).catch((error)=>{
      console.log(error)
    })

  },[])*/

  return (
    <main>Home</main>
  )
}

export default Home