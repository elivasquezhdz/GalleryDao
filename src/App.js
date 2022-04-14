import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./styles.css";
import "react-slideshow-image/dist/styles.css";
import { QRCode } from 'react-qrcode-logo';

class App extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: true,
      transitionDuration: 2000,
      arrows: false,
      infinite: true,
      easing: "ease",
      //indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = [
      {url:"https://lh3.googleusercontent.com/Pa5SMf7c2ySM4hD3uV6XCaYLqOuzsmEOLybLd3vrxMhaq0jAUm6ypQIDOzcG9o0i1nO4g3eqjky0OxBI9zSCY1QTax0KYCIz64EvSQ=w600"},
    ];

    const nfts =[


      {contractAddress:"0x78c7549716a6290bd92005eb2a4da9701599428a",
      tokenId:"212",
      url:"https://opensea.io/assets/0x78c7549716a6290bd92005eb2a4da9701599428a/212"}, 
  
      {contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",
      tokenId:"33911254874501868563329839216997312893782774976452525840755688063768262082561",
      url:"https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/33911254874501868563329839216997312893782774976452525840755688063768262082561/"}, 
     
      {contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",
      tokenId:"98005874063086952784788628439197826676066382464840560618238063422053382356993"},
      
      {contractAddress:"0x495f947276749ce646f68ac8c248420045cb7b5e",
      tokenId:"98005874063086952784788628439197826676066382464840560618238063437446545145857"},

  ];


    return (
      <div className="App">
        <div>
          <Slide ref={this.slideRef} {...properties}>
          {nfts.map((each,index) => (
            
              <div  key={index}>
                 <br></br>
                <nft-card
                contractAddress={each.contractAddress}
                tokenId={each.tokenId}
                width = "100%">
                </nft-card>
                <br></br>
        <div  className="flex-container">
          <QRCode url="https://webisora.com" />                
        </div>
        <div  className="flex-container">
          <div><img src="/atlas.jpg" width="200"/></div>
        </div>
              </div>
              
          ))}
          </Slide>
        </div>


      </div>
    );
  }
}

export default App;
