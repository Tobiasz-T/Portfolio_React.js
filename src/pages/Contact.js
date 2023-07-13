import React from 'react';
const t =  require('../imgs/Tobiasz_Tudrej.png');
const contact = () => {
  return (
    <div className="App">
      <header className="project">
        <div id="zdjęcie">
        <img src={t} alt='t'></img>
        </div>
        <h1>Contact</h1>
        <div id="box">
        <div id="p">
          <i class="fa fa-phone-square"></i> <span>tel:665-525-360</span>
        </div>
         <div id="p">
          <i class="fab fa-whatsapp"></i> <span>tel:665-525-360</span>
         </div>
                            
         <div id="p">
          <i class="fa fa-at"></i> <span>tobi1997tobi@wp.pl</span>
          </div>
         <div id="p"><i class="fab fa-linkedin"></i><span><a href="https://www.linkedin.com/home">linkedin</a></span></div>
        </div>  
      </header>
    </div>
  );
  };

export default contact;