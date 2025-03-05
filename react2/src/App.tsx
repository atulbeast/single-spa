import { useEffect, useState } from 'react';
import { navigateToUrl } from 'single-spa';

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    const mfCounterEvent = new CustomEvent("mfCounter-update", { detail: count });
    window.dispatchEvent(mfCounterEvent);
  },[count]);
  return (
    <div>
      <h2>MF2 Page</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count - 2)}>Decrease Counter</button>
      <button onClick={() => navigateToUrl("/")}>Back to Host</button>
    </div>
  );
}

export default App;
