import React, { useState } from 'react';
import Swal from 'sweetalert2'

import './styles/App.css';
import "./styles/NavHero.css"
import "./styles/Content.css"
import "./styles/Content2.css"
import "./styles/Footer.css"
import "./styles/Animations.css"
import NavHero from './Components/NavHero';
import Content from './Components/Content';
import Content2 from './Components/Content2';
import Footer from './Components/Footer';


function App() {

  const [footView, setFootView] = useState(false)

  function alert() {
    Swal.fire({
      title: 'Continue to Linkedin?',
      icon: 'info',
      confirmButtonText: 'Maybe later...',
      footer: `<a href="https://www.linkedin.com/in/agustin-mac-rae-3348ab216/"
       target="_blank" rel="noreferrer"> <div className="btn textcenter whiteT"
       style={{ backgroundColor: "#ef4b6c" }}>LETS TALK!</div></a>`,
    })
  }

  return (
    <div className="App">
      <NavHero footView={footView} alert={alert} />
      <div className='backshadow'>
        <Content />
        <Content2 />
      </div>
      <Footer setFootView={setFootView} alert={alert} />
    </div>
  );
}

export default App;
