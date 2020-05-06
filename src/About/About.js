import React from 'react';
import './About.css';
import Intro from "./Intro";
import Subjects from "./Subjects";
import Skills from "./Skills";
import Info from "./Info"



class About extends React.Component{
    render(){
        return(
            <div>
                <Intro/>
                <Info/>
                <Subjects/>
                <Skills/>
            </div>
            
        )
    }
}

export default About;