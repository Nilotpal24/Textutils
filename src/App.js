import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
import Alert from './Components/Alert.js';
/*import PropTypes from 'prop-types';*/
import React, { useState } from 'react';
/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";*/

function App() {
 const[alert, setAlert]= useState(null)
 const ShowAlert = (message, type)=>{
  setAlert({
     msg: message,
     type:type
  })
  setTimeout(()=>{
    setAlert(null);
  }, 2000);
}
 const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
 const toggleMode = () =>{
   if(mode === 'light'){
     setMode('dark')
     document.body.style.backgroundColor='#0d0d3f';
     ShowAlert('Dark mode has been enabled',"success");
     document.title='TextUtils  Dark mode';
   }
   else{
   setMode('light')
   document.body.style.backgroundColor='white';
   ShowAlert('Light mode has been enabled',"success");
   document.title='TextUtils  Light mode';
   }
 }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
   {/* <Router> */}
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} />
     <div className="container my-3">
     {/*<Switch>
          <Route exact path="/about">
            <About />
          </Route>
     <Route exact path="/"> */}
          <TextForm  ShowAlert={ShowAlert} heading="Enter the Text to Analyze"mode={mode}/>
         {/* </Route>
        </Switch>*/}
     </div>
  {/* </Router>*/}
   </>
  )
}
export default App;
 