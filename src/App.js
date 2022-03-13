import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";
import About from './components/About';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <><Router>
      <Navbar title="Texter's" />
      <Alert Alert={alert} />
      <Switch>
          <Route path="/Home"><Textform showAlert={showAlert} heading="Enter the Text Below" /></Route>
          <Route path="/About"><About/></Route>

          
   
         </Switch>

            </Router>
    
    </>
  );
}

export default App;