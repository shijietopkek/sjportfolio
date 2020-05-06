import React from 'react'

class Subject extends React.Component{

    _div = React.createRef()

    constructor(props){
        super(props)
        this.state={
            divheight:'0'
        }
    }
    componentDidMount(){
        const newh =this._div.current.clientWidth
        this.setState({
            divheight:newh.toString(10)+'px'
        })

    }

    render(){

        const divstyle={
            height:this.state.divheight,
            backgroundColor: this.props.bgcolor
        }

        return(
                <div className='main-div col-xs-4 col-md-2' ref={this._div} style={divstyle}>
                    <div class='subject-text'>
                        <span>{this.props.title}</span>
                    </div>
                    <div class='grade-text'>
                        <span>{this.props.grade}</span>
                    </div>
                        
                </div>
                  
        )
    }
}

export default Subject;