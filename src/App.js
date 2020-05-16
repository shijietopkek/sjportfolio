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
        <div id='about' class="grabbable">
        <About/>
        </div>
        
        <div id='interests' class="grabbable">
        <Interests/>
        </div>

        <div id='awards' class="grabbable">
        <Awards/>
        </div>

        <div id='projects' class="grabbable">
        <Projects/>
        </div>
        <div id='websites' class="grabbable">
        <Websites/>
        </div>
        <div class="grabbable">
        <Conclusion/>
        </div>
        
      
      
       
      </div>
    );
  }
  
}

export default App;
