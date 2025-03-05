import { useState, useEffect } from 'react';
import { navigateToUrl } from 'single-spa';
import './App.style.css';
function App({store}) {
  const [count, setCount] =useState(store.getState().counter);
  useEffect(()=>{
   store.setState({counter: count});
  },[count]);
  return (
    <div>
      <h2>MF1 Page</h2>
      <p>Counter: {count}</p>
      <div className='container'>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => navigateToUrl("/")}>Back to Host2</button>
      </div>
      <div className="bounce"></div>
    </div>
  );
}

export default App;
