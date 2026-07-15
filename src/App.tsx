import "./App.css";
import { useState } from "react";

function App() {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);
  const [bgColor, setBgColor] = useState("rgb(255, 255, 255)");
  const [Opacity, setOpacity] = useState(100);

  const colorChange = () => {
    setBgColor(`rgba(${red}, ${green}, ${blue}, ${Opacity / 100})`);
  };
  return (
    <>
      <div className="interface">
        <h1>
          Welcome to <span style={{ color: "#ff0000" }}>Color Picker</span>
        </h1>
        <div className="colorDisplay" style={{ backgroundColor: bgColor }}>
          <p>
            #
            {red.toString(16)}
            {green.toString(16)}
            {blue.toString(16)}
            {Opacity.toString(16)}
          </p>
        </div>
        <div className="inputs">
          <input
            placeholder="Red"
            type="number"
            min="0"
            max="255"
            value={red}
            onChange={(e) => setRed(Number(e.target.value))}
            onSubmit={colorChange}
          />
          <input
            placeholder="Green"
            type="number"
            min="0"
            max="255"
            value={green}
            onChange={(e) => setGreen(Number(e.target.value))}
            onSubmit={colorChange}
          />
          <input
            placeholder="Blue"
            type="number"
            min="0"
            max="255"
            value={blue}
            onChange={(e) => setBlue(Number(e.target.value))}
            onSubmit={colorChange}
          />
          <input
            placeholder="Opacity"
            type="number"
            min="0"
            max="99"
            value={Opacity}
            onChange={(e) => setOpacity(Number(e.target.value))}
            onSubmit={colorChange}
          />
        </div>
        <button onClick={colorChange}>Update color</button>
      </div>
    </>
  );
}

export default App;
