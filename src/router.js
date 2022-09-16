import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Error from './Pages/Error/404';
import OneDentist from "./Pages/OneDentist/OneDentist";


function App() {



  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>   </Route>
      <Route path="dentist/:id" element={<OneDentist/>}></Route>
      <Route path="*" element={<Error/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
