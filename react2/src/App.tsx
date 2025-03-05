import { useEffect, useState } from 'react';
import { navigateToUrl } from 'single-spa';
import './App.style.css';
function App({store}) {

  const [count, setCount] =useState(store.getState().counter);
  useEffect(()=>{
   store.setState({counter: count});
  },[count]);
  return (
    <div>
      <h2>MF2 Page</h2>
      <p>Counter: {count}</p>
      <div className='container'>
      <button onClick={() => setCount(count - 2)}>Decrease Counter</button>
      <button onClick={() => navigateToUrl("/")}>Back to Host</button>
      </div>
      <div className='tile'></div>
    </div>
  );
}

export default App;
