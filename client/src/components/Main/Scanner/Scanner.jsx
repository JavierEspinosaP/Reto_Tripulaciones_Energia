import React, {useState, useEffect} from "react";
import QrReader from "react-web-qr-reader";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import UsageQR from '../Form/UsageQR'


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

  const handleScan = (result) => {

    if (result) {

       setResult(result); 
    }
  };

  useEffect(() => {
    
  async function fetchData(){
  let regex = /https:\/\/eprel\.ec\.europa\.eu\/qr\//i;

  const url = result.data

  if(regex.test(url)){

    const id = url.slice(30, 37)
    console.log(id);
    const resDemo = await axios.get(`http://desafioapitest-env.eba-kma62rdj.us-east-2.elasticbeanstalk.com/check_qr?id=${id}`)
    console.log();
    setResponse(resDemo)
  }    
  }
  fetchData()
  console.log(response);


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
      {regex.test(result.data)?<p className="result">{result.data}</p>:<p className="result">No es una url valida</p>}         
      </div>:<UsageQR data={response.data}/>}
     
    </div>
  );
};

export default Example;