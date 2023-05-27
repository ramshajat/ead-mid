import React from "react";
import { useState,useEffect } from "react";
const Timmer = () => {
    const [time, setTime] = useState(10); 
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
  
      if (time === 0) {
        clearInterval(interval);
          
        setTime(0);
      }
  
      return () => clearInterval(interval);
    }, [time]);
  
    return (
      <div>
      {time === 0 ? (
        <h1>Time UP!</h1>
      ) : (
        <h1>Time: {time}</h1>
      )}
    </div>
  );
  };
  
  
  
  export default Timmer;