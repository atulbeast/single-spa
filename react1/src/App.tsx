import { useState } from 'react';
import { navigateToUrl } from 'single-spa';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>MF1 Page</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Counter</button>
      <button onClick={() => navigateToUrl("/")}>Back to Host</button>
    </div>
  );
}

export default App;
