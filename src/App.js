import React, {useState} from 'react'
import Counter from "./components/Counter";

function App() {
  const [text, setText] = useState('TEST');


  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
      

      <h1>{text}</h1>
      <input
          type="text"
          value={text}
          onChange={event => setText(event.target.value)} />
    </div>
  );
}

export default App;
