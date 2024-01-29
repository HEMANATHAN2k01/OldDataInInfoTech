import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  

  useEffect(()=>{
    handle()
  })

  const handle = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>CountOut : {count}</h1>
      <button>{}</button>
    </div>
  );
};
