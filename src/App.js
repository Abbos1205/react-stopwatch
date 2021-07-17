import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
 

  const start = () => {
    run();
   
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(0);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  


  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <DisplayComponent time={time}/>
               <div className="mt-5">
               <button className="mybtn btn btn-info" onClick={start}>Start</button>
               <button className="mybtn btn btn-danger" onClick={stop}>Stop</button>               
               <button className="mybtn btn btn-success" onClick={reset}>Reset</button>
               </div>         
             
          </div>
     </div>
    </div>
  );
}

export default App;
