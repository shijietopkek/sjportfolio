import React from 'react'
import Subject from './Subject'
import SubjectData from './SubjectData'
import './Subjects.css'

class Subjects extends React.Component{

    render(){   
        const subjectComponents = SubjectData.map(subject=><Subject key={subject.id} title={subject.title} grade={subject.grade} bgcolor={subject.bgcolor}/>) 
        
        return(
            <div className='subjects-overall-div'>
                <div className='container text-center'>
                    <h1>Subjects Taken</h1>
                    <p>Singapore-Cambridge General Certificate of Education Advanced Level (A-Levels) is an intensive 2-year programme with a greater academic rigour than its GCSE counterpart.</p>
                    <p>By the end of the programme, I have learnt how to think on my feet and find effective solutions to problem solving.</p>
                    <p>A-Levels has broadened my knowledge, sharpened my critical thinking skills and even taught me to be an effective team player, courtesy to the compulsory Project Work (PW) subject.</p>
                    <br/>
                    <div className='row'>
                        {subjectComponents}
                    </div>

                </div>
            </div>
        )
    }
}

export default Subjects;