import * as React from 'react';
import './style.css';
import { useState } from 'react';

function App() {
  const [val, setVal] = useState('');
  //const [cancel, setCancel] = useState("0");

  const input = (e) => {
    e.preventDefault();
    setVal((val) => val + e.target.value);
    console.log(input);
  };

  const changed = (e) => {
    e.preventDefault();
    setVal((val) => val + e.target.value);
  };

  const reset = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {}
  };

  const equals = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal('Error');
    }
  };

  return (
    <div className="main-container">
      <div className="calc-container">
        <input type="text" className="screen" value={val} />
        <div className="buttons-container">
          <div className="button-row-1">
            <button className="button" value="8" onClick={input}>
              8
            </button>
            <button className="button" value="8" onClick={input}>
              9
            </button>
            <button className="button" value="%" onClick={input}>
              %
            </button>
            <button className="button" value="/" onClick={input}>
              /
            </button>

            <button className="button" value="AC" onClick={reset}>
              AC
            </button>
          </div>
          <div className="button-row-2">
            <button className="button" value="5" onClick={input}>
              5
            </button>
            <button className="button" value="6" onClick={input}>
              6
            </button>
            <button className="button" value="7" onClick={input}>
              7
            </button>
            <button className="button" value="*" onClick={input}>
              *
            </button>
            <button className="button" value="C" onClick={reset}>
              C
            </button>
          </div>
          <div className="button-row-3">
            <button className="button" value="2" onClick={input}>
              2
            </button>
            <button className="button" value="3" onClick={input}>
              3
            </button>
            <button className="button" value="4" onClick={input}>
              4
            </button>
            <button className="button" value="+" onClick={input}>
              +
            </button>
            <button className="button" value="-" onClick={input}>
              -
            </button>
          </div>
          <div className="button-row-4">
            <button className="button" value="1" onClick={input}>
              1
            </button>
            <button className="button" value="0" onClick={input}>
              0
            </button>
            <button className=" equal-button" value="=" onClick={equals}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
