import React from 'react'
import './Conclusion.css'

class Conclusion extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className='conclusion-overall-div'>
                <div className='container'>
                    <h1>Thank You.</h1>
                    <hr/>
                    <div className='row'>
                        
                        <div className='col-sm conclusion-div add-margin'>
                            <h5><i class="far fa-envelope"></i> yu.shijie@dhs.sg</h5>
                            <h5><i class="fas fa-phone"></i> +65 90020578</h5>
                            <p className='github-acknowledgement'>Special thanks to Github for hosting this website.</p>
                        </div>

                        <div className='col-sm conclusion-div add-margin'>
                            <h3>Survey</h3>
                            <hr/>
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc7MZVMtVSCbmIom2Fgi4usJNkqQgfaRbcXKoLw15NpGnJIgg/viewform?embedded=true" width="100%" height="200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

                        </div>
                        
                        
                            

                    </div>
                </div>

                
            </div>
        )
    }
}

export default Conclusion;
