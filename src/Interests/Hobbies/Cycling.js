import React from 'react';
import './Cycling.css'

class Cycling extends React.Component{
    render(){
        return(
            <div className='card card-cycling'>
            <div className='card-body'>
            <div className='display-flex'>
                <div className='container-1 justify-content-center'>
                    <h3>Cycling</h3>
                    <hr/>
                    <p>My high school was strategically located at Tanjong Rhu, which is within walking distance from East Coast Park, the go-to cycling spot in Singapore.</p>
                    <p>With the resources at our disposal, my friend and naturally picked up cycling. Soon, we were cycling long distances, from Pasir Ris all the way to Gardens by the Bay.</p>
                    <p>The distance is long but every mile is worthwhile. That feeling of cruising down a cycling path, sceneries flashing across your eyes and the sea breeze blowing against your face, is nigh impossible to convey in words alone. The pinnacle lies at the end, when the scenery unfolds into the metropolitan downtown skyline of Singapore, thereby wrapping up the whole journey with an extravagant bang.</p>
                    <p>That particular route, till this day, remains my favourite. The experience will be augmented, however, once the Round Island Route is completed, and I will be able to take cycling to the next level.</p>
                    <button className='show-on-mobile btn btn-outline-light'data-toggle='modal' data-target={`#modalToggle_cycling`}>View Route</button>
                
                <div className='modal fade' id={`modalToggle_cycling`} tabindex='-1' role='dialog' aria-labelledby='#modalTitle' aria-hidden='true'>
                    <div className='awards-modal modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content' id='modal-content-cycling'>
                
                            <div className='modal-body text-center'>
                                <h4>The PS-ECP-GB Route</h4>
                                <br/>
                                <div>
                                <iframe src="https://www.google.com/maps/d/embed?mid=1-plBkUzANJHmNcKOxvvqpBOVRy-xzuK-" width="100%" height="480"></iframe>
                                </div>
                    
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='divider-1 hide-on-mobile'></div>
                <div className='divider-2 hide-on-mobile'></div>
                <div className='container-2 justify-content-center hide-on-mobile'>
                    <h4>The PS-ECP-GB Route</h4>
                    <br/>
                    <div>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1-plBkUzANJHmNcKOxvvqpBOVRy-xzuK-" width="100%" height="480"></iframe>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Cycling;


