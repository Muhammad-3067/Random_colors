import "./App.css";
import { IoMdClipboard } from "react-icons/io";
import React, { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const HexaColorGenerator = () => {
  const [copied, setCopied] = useState(false);

  let arraOfColors = [];
  const str = "0123456789abcdefABCDEF";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * str.length);
    arraOfColors.push(str[randomNum]);
  }
  let color = "#" + arraOfColors.join("");

  return (
    <div style={{ backgroundColor: color }} className="color-card">
      <span className="color">{color}</span>

      {copied ? (
        <div className="coupon-copied">Copied!</div>
      ) : (
        <CopyToClipboard onCopy={() => setCopied(true)}>
          <IoMdClipboard className="icon" />
        </CopyToClipboard>
      )}
    </div>
  );
};

const NumberOfColors = ({ items }) => {
  let colors = items.map((item) => <HexaColorGenerator key={item} />);
  return <div className="randomColors">{colors}</div>;
};

const App = () => {
  const ref = useRef("");
  const [lenCards, setLenCards] = useState(27);

  const changeValue = () => {
    setLenCards(ref.current.value);
  };

  const items = () => {
    let arraOfNums = [];
    if (lenCards > 200) {
      alert("App cannot generates more than 100 colors");
    } else {
      for (let i = 0; i < lenCards; i++) {
        arraOfNums.push(i);
      }
    }

    return arraOfNums;
  };

  return (
    <div className="app">
      <h1>30 Days Of React </h1>
      <p className="title">Hexidecimal Colors</p>
      <div className="color-generator-container">
        <div className="input-cont">
          <input type="number" ref={ref} className="color-input" />
          <button className="generate-btn" onClick={changeValue}>
            GENERATE
          </button>
        </div>
        <div className="colors-cont">
          <NumberOfColors items={items()} />
        </div>
      </div>
    </div>
  );
};

export default App;
