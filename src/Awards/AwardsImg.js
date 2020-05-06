import React from 'react';

class AwardsImg extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }

        
    }
    render(){

        const imgid = this.props.imgid
        const imgsrc = this.props.imgsrc
        const imgalt = this.props.imgalt
 
        return(
            <div style={{height:'100%',width:'100%'}}>
                <img className='awards-img' id={imgid} src={imgsrc} alt={imgalt} data-toggle='modal' data-target={`#modalToggle_${imgid}`}/>
                
                <div className='modal fade' id={`modalToggle_${imgid}`} tabindex='-1' role='dialog' aria-labelledby='#modalTitle' aria-hidden='true'>
                    <div className='awards-modal modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content'>
                
                            <div className='modal-body text-center'>
                                <img className='modal-img' id={imgid} src={imgsrc} alt={imgalt}/>
                                <p>{imgalt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default AwardsImg;