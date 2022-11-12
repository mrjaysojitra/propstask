import { useState } from "react";

function Practise() {
  const [ count, setCount ] =useState(0);
  
  const Add = () => {
    setCount(count+1)
  }

  const Mine = () => {

    if(count == 0)
    {
        setCount(count);

    }
    else
    {
    setCount(count-1)
    }
  }

  const Divi = () => {
    setCount(count/2)
  }


  return (
    <div className="App">
      <p>Click Now {count}</p>
      <button onClick={Add}>Click Me</button>
      <button onClick={Mine}>Click Me</button>
      <button onClick={Divi}>Click Me</button>
    </div>
    
  );
}

export default Practise;
