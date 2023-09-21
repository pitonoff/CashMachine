import React, { useState } from 'react';
import './Counter.css';


const Counter: React.FC = () => {
  const [count100, setCount100] = useState(0);
  const [count50, setCount50] = useState(0);
  const [count20, setCount20] = useState(0);
  const [count10, setCount10] = useState(0);
  const [count5, setCount5] = useState(0);

  const calculateFinalSum = () => {
    const finalSum = 100 * count100 + 50 * count50 + 20 * count20 + 10 * count10 + 5 * count5;
    return finalSum;
  };

  return (
    <div className="counter">
    <h5>Enter the number of banknotes in the input fields:</h5>
      <div className="inputWrapper">
      <img className="note" src="./100gel.svg" alt="100" />
        <label>100 GEL:</label>
        <input type="number" value={count100} onChange={(e) => setCount100(parseInt(e.target.value, 10))} />
      </div>
      <div className="inputWrapper">
      <img className="note fifty" src="./50gel.svg" alt="50" />
        <label>50 GEL:</label>
        <input type="number" value={count50} onChange={(e) => setCount50(parseInt(e.target.value, 10))} />
      </div>
      <div className="inputWrapper">
      <img className="note twenty" src="./20gel.svg" alt="20" />
        <label>20 GEL:</label>
        <input type="number" value={count20} onChange={(e) => setCount20(parseInt(e.target.value, 10))} />
      </div>
      <div className="inputWrapper">
      <img className="note ten" src="./10gel.svg" alt="10" />
        <label>10 GEL:</label>
        <input type="number" value={count10} onChange={(e) => setCount10(parseInt(e.target.value, 10))} />
      </div>
      <div className="inputWrapper">
      <img className="note five" src="./5gel.svg" alt="5" />
        <label>5 GEL:</label>
        <input type="number" value={count5} onChange={(e) => setCount5(parseInt(e.target.value, 10))} />
      </div>
      <h4 className="amount">Total Amount: {calculateFinalSum()} GEL</h4>
    </div>
  );
};

export default Counter;
