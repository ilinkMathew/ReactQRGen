import React from "react";
const kjua = require("kjua");
interface QRProp {
  value: string;
}
export default class QR extends React.Component<QRProp, {}> {
  generateQrWithText(text: String) {
    const qr = kjua({ text: text });
    this.removeOldQRIfFound();
    document.getElementById("qr")?.appendChild(qr);
  }
  componentDidUpdate() {
    if (this.props.value) {
      this.generateQrWithText(this.props.value);
    }
  }

  removeOldQRIfFound(){
      let oldQR  = document.getElementById('qr');
      if(oldQR){
          oldQR.textContent = null;
      }
  }

  render() {
    return (
      <div className="row">
        <div
          style={{
            marginTop: "5%",
            height: "500px",
            display: "flex",
            justifyContent: "center",
          }}
          className="col-6 border border-2"
        >
          <div id="qr" style={{ alignSelf: "center" }}></div>
        </div>
      </div>
    );
  }
}
