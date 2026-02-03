import React, { useState, useEffect } from "react";
import Modal from "./Modal.js";
import audioFile from "../assets/audio.mp3";

import i1 from "../assets/i1.PNG";
import i2 from "../assets/i2.PNG";
import i3 from "../assets/i3.PNG";
import i4 from "../assets/i4.PNG";
import i5 from "../assets/i5.PNG";
import ei from "../assets/ei.jpg";
import bg1 from "../assets/bg3a.png";
import bg2 from "../assets/bg1a.PNG";
import bg3 from "../assets/bg2b.JPG";
import army from "../assets/header.gif";
import header from "../assets/header2.jpg";

import "../App.css";

function App() {
  const [modalVisible, setModalVisible] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Use useEffect to show the modal when the component mounts
  useEffect(() => {
    setModalVisible(true);
  }, []);

  const closeModal = () => {
    setModalVisible(false);
    setAudioPlaying(true);
  };

  return (
    <div className="App">
      <div className="welcome">
        <Modal show={modalVisible} onClose={closeModal} />
      </div>
      {audioPlaying && (
        <audio autoPlay loop>
          <source src={audioFile} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      <body>
        <div className="container">
          <a
            href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xEEBBE95a57605AE701d3c42cd439FdCA8005582C"
            className="jupiter"
          >
            brrrrrrrrrrrrrrrrrruuy
          </a>
          <p className="title">BRAINLET</p>
          <p className="ca">
            $BRAINLET: 0xEEBBE95a57605AE701d3c42cd439FdCA8005582C
          </p>
          <br />
          <p className="heh">COMNUNMITY TAKEVOER</p>
          {/* <p className="hehe"></p> */}
          {/* <a href="https://www.reddit.com/r/copypasta" className="heheh">r/copypasta</a> */}
          <a href="https://t.me/RichBrainLet" className="i1container">
            <img src={i1} alt="telegram" className="icon" />
          </a>
          <a
            href="https://www.dextools.io/app/en/ether/pair-explorer/0xEEBBE95a57605AE701d3c42cd439FdCA8005582C"
            className="i2container"
          >
            <img src={i2} alt="twitter" className="icon" />
          </a>
          <a
            href="https://dexscreener.com/ethereum/0xEEBBE95a57605AE701d3c42cd439FdCA8005582C"
            className="i4container"
          >
            <img src={i4} alt="dexscreener" className="icon" />
          </a>
          <a href="https://x.com/RichBrainLet" className="i5container">
            <img src={i5} alt="solscan" className="icon" />
          </a>
        <p className="card">cerdit card:</p>
        <div className="container">
          <a href="https://moonshot.money/BRAINLET" className="cams">
            moonshot
          </a>
          <a href="https://www.prerich.com/" className="capr">
            prerich
          </a>
        </div>

        <p className="edit">join the brainlets on twiter:</p>
        <a href="https://brainletme.vercel.app/" className="editor">
          <img src={ei} alt="edit" className="editicon" />
          dent my hed now !
        </a>

        <img src={header} alt="itsok" className="header" />
        <img src={army} alt="armygif" className="army" />
        <img src={bg2} alt="collage1" className="mid" />
        <img src={bg1} alt="collage3" className="top" />
        <img src={bg3} alt="collage2" className="bottom" />
        {/* <iframe src="https://brainletme.vercel.app/" 
          className="iframe" 
          allow="clipboard-write">
        </iframe> */}
        <p className="footer">contact: brainlet team welcum home.</p>
        {/* <img src={bg1} alt="collage" className='main'/> */}
      </body>
    </div>
  );
}

export default App;
