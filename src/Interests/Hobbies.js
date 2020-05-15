import React from 'react';
import Cycling from './Hobbies/Cycling';
import Piano from './Hobbies/Piano';
import Reading from './Hobbies/Reading';
import './Hobbies.css'

class Hobbies extends React.Component{
    render(){
        return (
            <div class='hobbies-overall-div'>
                <div class='container'>
                    <div class='text-center'>
                    <h1>General Interests and Hobbies</h1>
                    <h5 className='hide-on-mobile'>I have a diverse range of interests and hobbies. It is my firm belief that the key to a good life is vibrancy and color.</h5>
                    <br/>
                    </div>
                    <Piano/>
                    <div className='divider'></div>
                    <Cycling/>
                    <div className='divider'></div>
                    <Reading/>
                </div>
            </div>
            
        )
    }
}

export default Hobbies;