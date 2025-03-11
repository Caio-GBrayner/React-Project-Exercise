import './App.css';
import React, {useState} from 'react';

function App() {

  const [first, changeFirst] = useState("In a good mood!");
  console.log(first);
  
  return(
  <>
    <h1>To day i am{first}</h1>
    <button onClick={() => {changeFirst("In a Happy mood")}}>Change Mood</button>
    <button onClick={() => {changeFirst("In a Sad mood")}}>Change Mood to Sad</button>
    <button onClick={() => {changeFirst("In a Frustrated mood")}}>Change Mood to Frustrated</button>
  </>
  )
}

export default App;
