import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About/About';
import Awards from './Awards/Awards';
import Projects from './Projects';

import Interests from './Interests/Interests';
import Websites from './Websites';
import Conclusion from './Conclusion';

class App extends React.Component{
  render(){
    return (
      <div>
        <Navbar/> 
        <div id='about'>
        <About/>
        </div>
        
        <div id='interests'>
        <Interests/>
        </div>

        <div id='awards'>
        <Awards/>
        </div>

        <div id='projects'>
        <Projects/>
        </div>
        <div id='websites'>
        <Websites/>
        </div>
        
        <Conclusion/>
      
      
       
      </div>
    );
  }
  
}

export default App;
