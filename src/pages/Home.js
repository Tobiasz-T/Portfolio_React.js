import React from 'react';

const t =  require('../imgs/Tobiasz_Tudrej.png');
const Home = () =>  {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <h1>Portfolio</h1>
          <br></br><h2>Hi, my name is Tobiasz Tudrej.<br></br>I am an IT specialist.</h2>
          <div id="zdjęcie">
            <img src= {t} alt="t"></img>
          </div>
          <h2>
        About Me
        <br></br>
        <br></br>
        Graduated from an IT Technical School in Szczecin.
        <br></br>
        I enjoy programming and learning new coding techniques, methods, and frameworks.
        <br></br>
        I’m open to new challenges and like improving my professional skills.
    </h2>
        </header>
      </div>
      </>  
    )
  };

export default Home;