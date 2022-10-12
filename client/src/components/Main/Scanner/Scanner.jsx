import React, {useState} from "react";
import QrReader from "react-web-qr-reader";

const Example = () => {
  const delay = 500;

  const previewStyle = {
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