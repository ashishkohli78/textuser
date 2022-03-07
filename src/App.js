import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

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
    <>
      <Navbar title="Texter's" />
      <Alert Alert={alert} />
   
            <Textform showAlert={showAlert} heading="Enter the Text Below" />
         


    
    </>
  );
}

export default App;