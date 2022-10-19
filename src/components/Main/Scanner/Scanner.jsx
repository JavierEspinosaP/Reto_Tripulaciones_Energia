import React, {useState, useEffect, useContext} from "react";
import QrReader from "react-web-qr-reader";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import UsageQR from '../Form/UsageQR';
import { dataContext }  from '../../../context/dataContext';


const Example = () => {
  const delay = 500;

  const previewStyle = {
    margin: "50px",
    height: 240,
    width: 320
  };
  // eslint-disable-next-line
  let regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
  const [result, setResult] = useState({});
  const [response, setResponse] = useState({})
  const apiKey = process.env.REACT_APP_API_KEY
  const {dataSession, setDataSession} = useContext(dataContext)

  const handleScan = (result) => {

    if (result) {

       setResult(result); 
    }
  };

  useEffect(() => {
    
  async function fetchData(){
  let regex = /https:\/\/eprel\.ec\.europa\.eu\/qr\//i;

  const url = result.data
  let id
  if (url) {
  id = url.split('/').pop();    
  }

  console.log(id);

  if(regex.test(url)){


    console.log(url);
    const resDemo = await axios.get(`https://whispering-river-01987.herokuapp.com/check_qr?api_key=${apiKey}&product_id=${id}`)
    setResponse(resDemo)
    if (dataSession.length>1) {
    setDataSession(...dataSession, resDemo.data)      
    }

  console.log(resDemo);    
  }    
  }
  fetchData()


// eslint-disable-next-line
  }, [result])
  

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div>
      {Object.keys(response).length === 0?<div className="camaraContainer">
      <Link className="btn-link"  to={"/"}><Button sx={{margin: 3}} variant="contained">Volver</Button></Link>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      {regex.test(result.data)?null:<p className="result">No es una url valida</p>}         
      </div>:<UsageQR data={response.data}/>}
     
    </div>
  );
};

export default Example;