import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(10);
  const [displayButton, setDisplayButton] = useState(true)

  const showNumber = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {

    const intervalId = setInterval(() => {
      if (time === 0) {
        setDisplayButton(!displayButton)
        return time;
      }
      setTime(() => time - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time])



  return (
    <div className="App">
      <div className='container'>{counter}</div>
      <h4>Time Left : {time} Seconds </h4>
      {displayButton && <button onClick={showNumber} className="button">+</button>}
    </div>
  );
}

export default App;
