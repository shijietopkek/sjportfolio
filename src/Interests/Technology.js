import React from 'react';
import './Technology.css'


class Technology extends React.Component{
    _div=React.createRef()
    constructor(props){
        super(props)
        this.state={
            height:'0'
        }

    }
    componentDidMount(){
        const divh=this._div.current.clientWidth
        this.setState({
            height:divh.toString(10)+'px'
        })
    }

    render(){
        const imgurl = require('../../'+this.props.imgurl);
        const divstyle = {
            backgroundImage: 'url(' + imgurl + ')',
            backgroundSize:     'contain',
            backgroundRepeat:   'no-repeat',
            padding:0,
            height:this.state.height
            
            
        };
        

        
        return(
            
            <div className="main-div col-xs-6 col-md-3" style={divstyle} ref={this._div}>
                <div className='shade-div'>                
                    <button id='divbutton' type='button' className='btn btn-outline-info waves-effect' data-toggle="modal" data-target={`#modalToggle_${this.props.id}`}>{this.props.title}</button>
                </div>
                <div class="modal fade" id={`modalToggle_${this.props.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content black-text">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">{this.props.title}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body text-justified">
                                <p>{this.props.description}</p>
                    
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            
            
        )

    }
        
}
export default Technology;
