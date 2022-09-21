import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from './Pages/Error/404';
import Layout from "./Layout/Layout";


function App() {



  return (
   <Layout>
    <Routes>
      <Route path="/" element={<Home />}/>  
      <Route path="*" element={<Error/>} />
    </Routes>
    </Layout>
  );
}

export default App;
