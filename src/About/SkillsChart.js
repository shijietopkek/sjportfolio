import React from 'react'
import {Scatter} from 'react-chartjs-2'
import CSS from '../../src/assets/img/logos/CSS_logo_vector.png'
import HTML from '../../src/assets/img/logos/HTML_logo_vector.png'
import JS from '../../src/assets/img/logos/JS_logo_vector.png'
import EXCEL from '../../src/assets/img/logos/excel_logo_vector.png'
import PYTHON from '../../src/assets/img/logos/Python_logo_vector.png'
import R from '../../src/assets/img/logos/R_logo_vector.png'
import TABLEAU from '../../src/assets/img/logos/Tableau_Logo_Vector.png'


class SkillsChart extends React.Component{
    

    constructor(props){
        const cssPoint = new Image(50,60)
        const htmlPoint = new Image(50,60)
        const jsPoint = new Image(50,60)
        const excelPoint = new Image(50,50)
        const pythonPoint = new Image(50,50)
        const rPoint = new Image(60,50)
        const tableauPoint = new Image(50,50)
        const railsPoint = new Image(50,50)
        cssPoint.src = CSS
        htmlPoint.src = HTML
        jsPoint.src = JS
        excelPoint.src=EXCEL
        pythonPoint.src=PYTHON
        rPoint.src=R
        tableauPoint.src=TABLEAU
        railsPoint.src='https://avatars.githubusercontent.com/u/4223'
        super(props)
        this.state={
            chartData:{
                labels: ['a','b','c'],
                datasets:[{
                    label:'Population',
                    data:[
                        {
                            y: 4.5,
                            x: 1
                        }, {
                            y: 4,
                            x: 0.85
                        }, {
                            y: 4,
                            x: 0.75
                        }, {
                            y: 3.5,
                            x: 0.7
                        }, {
                            y: 2,
                            x: 0.65
                        }, {
                            y: 3,
                            x: 0.75
                        }, {
                            y: 0.5,
                            x:0.3
                        }, {
                            y: 0.25,
                            x: 0.5
                        }
                    ],
                    pointStyle:[pythonPoint,htmlPoint,cssPoint,jsPoint,excelPoint,tableauPoint,rPoint,railsPoint],
                    pointRadius: 20,
                    bqckgroundColor: 'white'
                }]

            },
            chartOptions:{
                legend:{
                    display:false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:true
                        },
                        scaleLabel: {
                            display: true,
                            fontSize:24,
                            labelString: 'EXPERIENCE LEVEL'
                        },
                        ticks: {
                            max:1.1,
                            display:false,
                            beginAtZero:false
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display:true
                        },
                        scaleLabel:{
                            display:true,
                            fontSize:24,
                            labelString:'NO. OF YEARS'
                        },
                        ticks: {
                            max:5,
                            fontSize:16,
                            beginAtZero:true
                        }   
                    }]
                },
                tooltips: {
                    enabled:false
                }
                  

            }
        }
    }
    render(){
        
        return(
            <div className='chart'>
            <Scatter 
                data={this.state.chartData}
                options={this.state.chartOptions}
                    
            
            />
            </div>
        )
    }
}

export default SkillsChart;