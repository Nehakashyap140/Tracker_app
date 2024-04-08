// import logo from './logo.svg';
import React, { createContext, useContext, useState } from "react";
import "./App.css";
import Renderlist from "./Renderlist";
import Uscomponent from "./hook/usestate/Uscomponent";
import Usobject from "./hook/usestate/Usobject";
import USstatearray from "./hook/usestate/USstatearray";
import Useeffect from "./hook/useeffect/Useffect";
import ComponentA from "./hook/usecontext/ComponentA";
import Classform from "./hook/formhandling/controlcomponent/Classform";
import Functioncomponent from "./hook/formhandling/Functioncomponent";
import Multipleinput from "./hook/formhandling/Multipleinput";
import Otherinput from "./hook/formhandling/Otherinput";
import Multiplecheckbox from "./hook/formhandling/Multiplecheckbox";
import Userefhook from "./hook/formhandling/uncontrolcomponent/Userefhook";
import HookuseRef from "./hook/formhandling/uncontrolcomponent/HookuseRef";
import { Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Axois from "./api/Axios";
import Postapi from "./api/Postapi";
import Read from "./crud/Read";
import Create from "./crud/Create";
import Form from "./Form";
import Switch from "./switch";
import Tracker from "./tracker_app/Tracker";

export let NameContext = createContext();
export let channelContext = createContext();
function App() {
  // const [channel, setChannel] = useState("Learning Never End");

  return (
    <>
      <Tracker />
      {/* <Switch /> */}

      {/* <Form/>
       <div className='container'>
        <Routes>
          <Route exact path='/' element={<Read/>}>

          </Route>

          <Route exact path='/create' element={<Create/>}>

</Route>
        </Routes> */}

      {/* </div> */}
      {/* <Axois/> */}
      {/* <Routes>
        <Route path='/' element={<Home}>
           

        </Route>

       </Routes> */}
      {/* <Renderlist/> 
<Uscomponent/>
<Usobject/>
<USstatearray/>
<Useeffect/>
<NameContext.Provider value={'neha'}>
  <channelContext.Provider value={channel}>
<ComponentA/>
</channelContext.Provider>
</NameContext.Provider>
<Functioncomponent/>
<Multipleinput/>
<Otherinput/>
<Classform/>
<Multiplecheckbox/> */}
      {/* <HookuseRef/> */}
      {/* <Userefhook/> */}
      {/* <Postapi/> */}
      {/* <Create/> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
