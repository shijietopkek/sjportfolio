import React from 'react';
import './Award.css';
import AwardsImgs from './AwardsImgs';

class Award extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cardBg:'',
            cardBorder:'',
            textColor:''
        }
    }
    
    componentDidMount(){
        const placing = this.props.placing;
        if(placing=='1st'){
            this.setState({
                cardBg: '#FFD700',
                cardBorder:'#b89400',
                textColor:'#121212'

            })
        }else if(placing=='2nd'){
            this.setState({
                cardBg:'#dbe4eb',
                cardBorder:'#777777',
                textColor:'#121212'
            })
        }else if(placing=='3rd'){
            this.setState({
                cardBg:'#a97142',
                cardBorder:'#8B4513',
                textColor:'#ffffff'
            })
        }else{
            this.setState({
                cardBg: '#5888ae',
                cardBorder:'#1c4966',
                textColor:'#ffffff'
            })
        }

    }
    render(){
        
        const cardStyle = {
            backgroundColor:this.state.cardBg,
            border: '10px solid '+this.state.cardBorder
        }
        const textStyle = {
            color:this.state.textColor
        }
        const hrStyle ={
            backGroundColor:this.state.textColor,
            borderColor:this.state.textColor
        }
        return(
            <div>
            <div className='card awardsdiv' style={cardStyle}>
                <div className='card-body'>
                    <div className='display-flex awards-div'>
                        <div className='text-center container-1' style={textStyle}>
                                <h1><b>{this.props.placing}</b></h1>
                                <hr style={hrStyle}/>
                                <h3>{this.props.title}</h3>
                                <div className='text-justified'>
                                    <p>{this.props.description}</p>
                                </div>
                        </div>
                        <div className='container-divider'></div>
                        <div className='container-2'>
                            <AwardsImgs imglinks = {this.props.imglinks}/>
                        </div>
                        
                    </div>
                </div>
            </div>
            <br/>
            </div>
        )
    }
    

}
        

export default Award;