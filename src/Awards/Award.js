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
                cardBg: 'linear-gradient(-72deg,#ffde45,#ffffff 16%,#ffde45 21%,#ffffff 24%,#ffde45 36%,#ffffff 50%,#ffffff 60%,#ffde45 72%,#ffffff 80%,#ffde45 84%)',
                textColor:'#121212'

            })
        }else if(placing=='2nd'){
            this.setState({
                cardBg:'linear-gradient(-72deg,#dedede,#ffffff 16%,#dedede 21%,#ffffff 24%,#dedede 36%,#ffffff 50%,#ffffff 60%,#dedede 72%,#ffffff 80%,#dedede 84%)',
                textColor:'#121212'
            })
        }else if(placing=='3rd'){
            this.setState({
                cardBg:'linear-gradient(-72deg,#ca7345,#ffdeca 16%,#ca7345 21%,#ffdeca 24%,#a14521 27%,#ca7345 36%,#ffdeca 50%,#ffdeca 60%,#ca7345 72%,#ffdeca 80%,#ca7345 84%)',
                textColor:'#000'
            })
        }else{
            this.setState({
                cardBg: 'linear-gradient(-72deg,#dedeff,#ffffff 16%,#dedeff 21%,#ffffff 24%,#dedeff 36%,#ffffff 50%,#ffffff 60%,#dedeff 72%,#ffffff 80%,#dedeff 84%)',
                textColor:'#121212'
            })
        }

    }
    render(){
        
        const cardStyle = {
            background:this.state.cardBg,
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
                    <div className='display-flex awards-div remove-flex-on-mobile'>
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