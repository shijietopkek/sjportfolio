import React from 'react';
import './Awards.css';
import AwardsData from './AwardsData'
import Award from './Award'


class Awards extends React.Component{

    render(){
        const AwardsComponents = AwardsData.map(award => <Award key={award.id} placing={award.placing} title={award.title} description={award.description} imglinks={award.imglinks}/>)
        return(
            <div className='awards-overall-div'>
                <div className='container text-center'>
                    
                    <h1>Accolades and Achievements</h1>
                    <br/>
                    {AwardsComponents}
                    
                </div>
            </div>
                    )
    }
}

export default Awards;