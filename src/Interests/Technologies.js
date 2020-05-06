import React from 'react';
import TechnologiesData from './TechnologiesData';
import Technology from './Technology';
import './Technologies.css'

class Technologies extends React.Component{
    render(){
        const TechnologiesComponents = TechnologiesData.map(technology=><Technology key={technology.id} id={technology.id} title={technology.title} imgurl={technology.imgurl} description={technology.description}/>);
        return(
            <div class='technologies-overall-div'>
                <div class='container text-center'>
                <h1>Interests in Technology</h1>
                <br/>
                <div className='row'>
                    {TechnologiesComponents}
                </div>
                </div>
            </div>
            

        )
    }
}

export default Technologies;