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
                    <p>That particular route, till this day, remains my favourite. However, once the Round Island Route is completed, I will be able to take cycling to the next level.</p>
                </div>
                <div className='divider-1'></div>
                <div className='divider-2'></div>
                <div className='container-2 justify-content-center'>
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


