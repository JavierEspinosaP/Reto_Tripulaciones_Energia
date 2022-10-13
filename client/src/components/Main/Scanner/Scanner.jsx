import React, {useState} from "react";
import QrReader from "react-web-qr-reader";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Example = () => {
  const delay = 500;

  const previewStyle = {
    margin: "50px",
    height: 240,
    width: 320
  };

  const [result, setResult] = useState("No result");

  const handleScan = (result) => {
    if (result) {
      setResult(result);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <div className="camaraContainer">
      <Link className="btn-link"  to={"/"}><Button sx={{margin: 3}} variant="contained">Volver</Button></Link>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p id="result">{result.data}</p>      
    </div>
  );
};

export default Example;