import React from "react";
import SkillsChart from './SkillsChart.js'
import SkillsChartMobile from './SkillsChartMobile.js'
import './Skills.css'


class Skills extends React.Component{
    render(){
        
        return(
            <div className='skills-overall-div'>
                <div className='container text-center'>
                    <h1>Skills</h1>
                    <p className='hide-on-mobile'>My experience as a computing student gave me the opportunity to pick up various skills in the areas of front-end development, back-end development and data science.</p>
                    <br/>
                    <SkillsChart/>
                    <SkillsChartMobile/>
                </div>
            </div>
        )
    }
}

export default Skills