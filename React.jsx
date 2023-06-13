import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data') // Replace with your actual API endpoint URL
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <p>Data received from the backend: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;
