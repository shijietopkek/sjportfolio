import React from 'react';
import './Websites.css';


class Websites extends React.Component{
    render(){
        return(
            <div className='website-overall-div'>
                <div className='container text-center'>
                    <h1>My Websites</h1>
                    <div className='display-flex website-divs'>
                        <div className='website-div'>                
                                        <img className='website-img' src="https://i.imgur.com/XvCOPQ8.png" alt='Tableau'/>
                                
                            <a href="https://public.tableau.com/profile/yu.shijie#!/" title="Go to my Tableau profile" target="_blank">
                        <div className='website-hover-div'>
                            <div className='website-text text-center'>
                                <p>Tableau</p>
                            </div>
                        </div>
                        </a>
                        </div>
                        <div className='website-div'>
                        
                    
                                        <img className='website-img' src="https://i.imgur.com/22zjKMN.png" alt='LinkedIn'/>
                        
                                
                                <a href="https://linkedin.com/in/yu-shi-jie-b8a36b129" title="Go to my LinkedIn Profile" target="_blank">
                                <div className='website-hover-div'>
                                    <div className='website-text text-center'>
                                        <p>LinkedIn</p>
                                    </div>
                                </div>
                                </a>
                        </div>
                        <div className='website-div'>
                        
                    
                                        <img className='website-img' src="https://i.imgur.com/OafHKnb.png" alt='Github'/>
                
                                
                                <a href="https://github.com/shijietopkek" title="Go to my Github profile" target="_blank">
                                <div className='website-hover-div'>
                                    <div className='website-text text-center'>
                                        <p>Github</p>
                                    </div>
                                </div>
                                </a>
                        </div>
                    </div>
                </div>
            </div>
        


        )
    }
}

export default Websites;