import './App.css';
import React, {useState, useEffect} from 'react';

// https://api.github.com/users/Caio-GBrayner

function App(login) {
  const [data, updateData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`).then((response) => response.json()).then(updateData);
  }, [login])

  if(data) {
    return <div>{JSON.stringify(data)}</div>;
  }
  else {
    <div>No user Available</div>
  }
}

export default App;
