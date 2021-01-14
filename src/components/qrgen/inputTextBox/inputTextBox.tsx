import React, { ChangeEvent } from "react";
interface InputTextBoxState {
  qrText:string

}
interface InputTextBoxProp{
  generate:any
}

export default class InputTextBox extends React.Component<InputTextBoxProp,InputTextBoxState> {

  constructor(props:any){
   super(props);
   this.state = {qrText:''}
   this.handleChange =  this.handleChange.bind(this);
  }

  handleChange(e:ChangeEvent<HTMLInputElement>){
  this.setState({qrText:e.target.value})
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="input-group input-group-lg">
            <span className="input-group-text" id="inputGroup-sizing-lg">
              QR Text
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              value={this.state.qrText}
              onChange={this.handleChange}
            ></input>
          </div>
        </div>
        <div style={{textAlign:"left"}} className="col-4 ">
          <button onClick={()=>this.props.generate(this.state.qrText)}  type="button" className="btn btn-dark btn-lg ">
            Generate
          </button>
        </div>
      </div>
    );
  }
}
