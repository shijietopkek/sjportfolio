import React from 'react';
import './Interests.css';
import Technologies from './Technologies';
import Hobbies from './Hobbies';


class Interests extends React.Component{
    render(){
        return(
            <div>
                <Technologies/>
                <Hobbies/>               
            </div>
        )
    }
}

export default Interests;