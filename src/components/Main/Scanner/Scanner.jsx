import React, { useState, useEffect, useContext } from "react";
import QrReader from "react-web-qr-reader";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from 'axios';
import Scanner2 from '../Scanner2'
import { dataContext } from '../../../context/dataContext';


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
  const { dataSession, setDataSession } = useContext(dataContext)

  const handleScan = (result) => {

    if (result) {
      let regex = /https:\/\/eprel\.ec\.europa\.eu\/qr\//i;

      const url = result.data
      let id
      if (url) {
        id = url.split('/').pop();
        
      }
      if (regex.test(url)) {setResult(id)}
      console.log(result);
    }
  };


  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div>
      {Object.keys(result).length === 0 ? <div className="camaraContainer">
        <Link className="btn-link" to={"/"}><Button sx={{ margin: 3 }} variant="contained">Volver</Button></Link>
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
        />
        {regex.test(result) ? null : <p className="result">No es una url valida</p>}
      </div> : <Scanner2 data={result} />}

    </div>
  );
};

export default Example;