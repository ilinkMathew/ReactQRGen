import { realpathSync } from "fs";
import React from "react";
import InputTextBox from "./inputTextBox/inputTextBox";
import QR from "./qr/qr";

import './qrgen.css'

export default class QrGen extends React.Component<{},{qrValue:string}> {

  constructor(props:any){
    super(props)
    this.generateQR = this.generateQR.bind(this)
    this.state = {qrValue:""}
  }

 generateQR(text:string){
 this.setState({qrValue:text})
 } 
  render() {
    return (
      <div className="container-fluid">
        <div className="container-md inputTextbox ">
            <InputTextBox generate={this.generateQR}/>
            <QR value={this.state.qrValue}/>
        </div>
      </div>
    );
  }
}
