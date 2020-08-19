import React from 'react';

function Food({ favourite }) {
  return <h1>I like {favourite}</h1>
}

function App() {
  return (
    <div className="App">
      <h1>Hello React JS.</h1>
      <Food favourite="kimchi" />
      <Food favourite="noodle" />
      <Food favourite="rice" />
      <Food favourite="egg" />
    </div>
  );
}

export default App;
