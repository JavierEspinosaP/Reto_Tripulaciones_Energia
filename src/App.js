import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/styles.scss';
import Main from './components/Main'
import { dataContext }  from './context/dataContext';
import { categoryContext }  from './context/categoryContext';
import { productOneContext }  from './context/productOneContext';


function App() {
  const [dataSession, setDataSession] = useState([])
  const [category, setCategory] = useState([])
  const [productOneTrue, setProductOneTrue] = useState(false)


  const dataObj = {
    dataSession, 
    setDataSession
  }

  const categoryObj = {
    category, setCategory
  }

  const productOneContextObj = {
    productOneTrue, setProductOneTrue
  }
  return (
    <div className="App">

      <BrowserRouter>
      <productOneContext.Provider value={productOneContextObj}>
      <categoryContext.Provider value={categoryObj}>
      <dataContext.Provider value={dataObj}>
      <Main/>
      </dataContext.Provider>
      </categoryContext.Provider>
      </productOneContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
