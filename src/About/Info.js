import React from 'react';
import './Info.css'

class Info extends React.Component{
    render(){
        return(
            <div className='info-overall-div'>
                <div className='container'>
                    <div className='display-flex remove-flex-on-mobile' style={{minHeight:'300px'}}>
                        <div className='info-image-container'>
                            <div className='info-image justify-content-center'>
                                <img className='info-img' src={require('../../src/assets/img/me/Me.jpg')} alt='Me fooling around after school at East Coast Park. Good times.'/>
                            </div>
                            
                        </div>
                        <div className='info-text-container'>
                            <div className='info-text'>
                                <h1>About me</h1>
                                <br/>
                                <p>I was a former computing student from Dunman high school.</p>
                                <p>Having graduated in 2017, I intend to pursue Business Analytics for my undergraduate studies. My passion in business analytics stemmed from a data analytics competition I took part in the past. Since then, I began developing my data-science portfolio, picking up new skills such as Excel, R and Python Data Science libraries while sharpening my existing Tableau skills.</p>
                                <p>My hobbies include playing the piano, cycling and reading. Through these hobbies I have both grown as a person and learnt to appreciate what life has to offer.</p>


                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            


        )
    }
}
export default Info;