import React, {useState, useEffect, useContext} from "react";
import QrReader from "react-web-qr-reader";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import UsageQR from '../Form/UsageQR';
import { dataContext }  from '../../../context/dataContext';


const Example2 = (props) => {


  const qr1 = props.data
  console.log(qr1);
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

  

  if(regex.test(url)){


    console.log(id);
    console.log(qr1);
    console.log(apiKey);
    const resDemo = await axios.get(`https://whispering-river-01987.herokuapp.com/check_qr?api_key=${apiKey}&productId1=${id}&productId2=${qr1}`)
    setResponse(resDemo.data)

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
        <p>esto es scanner 2</p>
      <Link className="btn-link"  to={"/"}><Button sx={{margin: 3}} variant="contained">Volver</Button></Link>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      {regex.test(result.data)?null:<p className="result">Esto es scanner 2</p>}         
      </div>:<UsageQR data={response}/>}
     
    </div>
  );
};

export default Example2;