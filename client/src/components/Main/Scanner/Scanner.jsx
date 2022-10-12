import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'


class Scanner extends Component {


  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
      mode: 'rear'
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if (data!=null) {
    this.setState({
      result: data.text,
    })      
    }

  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          facinMode={this.state.mode}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default Scanner
