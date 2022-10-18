import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import Main from './components/Main'
import { dataContext }  from './context/dataContext';



function App() {
  const [dataSession, setDataSession] = useState({})


  const dataObj = {
    dataSession, 
    setDataSession
  }
  return (
    <div className="App">

      <BrowserRouter>
      <dataContext.Provider value={dataObj}>
      
      <Main/>
      
      </dataContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
