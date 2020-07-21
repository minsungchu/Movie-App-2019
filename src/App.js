import React from 'react';

function Food({fav}){
    console.log(fav);
    return(
        <div>I love {fav}</div>
    );
}

function App() {
  return (
    <div>
        <div>Hello ReactJS</div>
        <Food fav={"kimchi"}/>
        <Food fav={"rice"}/>
    </div>


  );
}

export default App;
