import React from 'react';
import "./Intro.css";

class Intro extends React.Component{
    render(){
        return(
            <div class='intro-div'>
                <div class='background-image'></div>
                <div class='filter-gradient-gray'></div>
                <div class='intro-text text-center'>
                    <span>Hi, I am Shi Jie.</span>
                </div>
                <div class="chevron-container text-center">
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                        <div class="chevron"></div>
                        <span class="text">Scroll down</span>
               
                </div>
            </div>
            
        )
    }
}

export default Intro;