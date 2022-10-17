import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
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
      <Header/>
      <Main/>
      <Footer/>
      </dataContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
