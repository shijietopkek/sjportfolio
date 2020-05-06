import React from 'react'
import AwardsImg from './AwardsImg'


class AwardsImgs extends React.Component{


    constructor(props){
        super(props)
        this.state={
            size: this.props.imglinks.length
        }
    }
    render(){
        const imgs = this.props.imglinks
        if (this.state.size==1){
            return(
                <div className='awardsimgdiv display-block'>
                    <div className='div-standalone'>
                        <AwardsImg imgid={imgs[0][0].substring(imgs[0][0].length-11, imgs[0][0].length-4)} imgsrc={imgs[0][0]} imgalt={imgs[0][1]}/>
                    </div>
                </div>
            )
        }else if (this.state.size==2){
            return(
                <div className='awardsimgdiv display-block'>
                    <div className='div-top'>
                    <AwardsImg imgid={imgs[0][0].substring(imgs[0][0].length-11, imgs[0][0].length-4)} imgsrc={imgs[0][0]} imgalt={imgs[0][1]}/>
                    </div>
                    <div className='div-bottom'>
                    <AwardsImg imgid={imgs[1][0].substring(imgs[1][0].length-11, imgs[1][0].length-4)} imgsrc={imgs[1][0]} imgalt={imgs[1][1]}/>
                    </div>
                </div>
            )
        }else{
            return(
                <div className='awardsimgdiv display-block'>
                    <div className='div-top'>
                    <AwardsImg imgid={imgs[0][0].substring(imgs[0][0].length-11, imgs[0][0].length-4)} imgsrc={imgs[0][0]} imgalt={imgs[0][1]}/>
                    </div>
                    <div className='div-bottom display-flex'>
                        <div className='div-left'>
                        <AwardsImg imgid={imgs[1][0].substring(imgs[1][0].length-11, imgs[1][0].length-4)} imgsrc={imgs[1][0]} imgalt={imgs[1][1]}/>
                        </div>
                        <div className='div-right'>
                        <AwardsImg imgid={imgs[2][0].substring(imgs[2][0].length-11, imgs[2][0].length-4)} imgsrc={imgs[2][0]} imgalt={imgs[2][1]}/>
                        </div>
                    </div>
                </div>
            )
        }

    }
}

export default AwardsImgs;