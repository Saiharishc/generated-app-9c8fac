import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error fetching items:', err));
  }, []);

  return (
    <div>
      <h1>Generated App</h1>
      <h2>Items:</h2>
      <pre>{JSON.stringify(items, null, 2)}</pre>
    </div>
  );
}

export default App;
