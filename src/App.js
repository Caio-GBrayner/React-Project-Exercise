import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [first, changeFirst] = useState("In a good mood!");

const [secondary, changeSecondary] = useState("Nice")

  useEffect(() => {
    console.log(`We are ${first} today!`);
  },[first]);

  useEffect(() => {
    console.log(`Its ${secondary} here!`);
    
  }, [secondary]);
  
  return(
  <>
    <h1>To day i am{first}</h1>
    <button onClick={() => {changeFirst("In a Happy mood")}}>Change Mood</button>
    <button onClick={() => {changeFirst("In a Sad mood")}}>Change Mood to Sad</button>
    <button onClick={() => {changeFirst("In a Frustrated mood")}}>Change Mood to Frustrated</button>
    
    <hr></hr>

    <button onClick={() => {changeSecondary("Awsome")}}> Change to Awsome </button>
    <button onClick={() => {changeSecondary("Great")}}> Change to Great </button>
  </>
  )
}

export default App;
