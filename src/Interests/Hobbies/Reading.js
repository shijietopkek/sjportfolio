import React from 'react';
import './Reading.css'

class Reading extends React.Component{
    render(){
        const books=[{title:'Crime and Punishment',author:'Fyodor Doestoyesky'},
        {title:'The Plague',author:'Albert Camus'},
        {title:'Uncle Tom\'s Cabin',author:'Harriet Beecher Stowe'},
        {title:'The Alchemist',author:'Paulo Coelho'},
        {title:'The Island of Dr Moreau',author:'H. G. Wells'},
        {title:'The Time Machine',author:'H. G. Wells'},
        {title:'Two Treatises of Government',author:'John Locke'},
        {title:'Fahrenheit 451',author:'Ray Bradbury'},
        {title:'Twelve Years a Slave',author:'Solomon Northup'},
        {title:'Leviathan',author:'Thomas Hobbes'}
        ]
        let listArray = [];
        let tableArray = [];
        for(let i=0; i<books.length;i++){
            listArray.push(
                <li>
                    <b>{books[i].title}</b>
                    <p>{books[i].author}</p>
                </li>
            )
            tableArray.push(
                <tr>
                    <th scope="row">{i+1}</th>
                    <td>{books[i].title}</td>
                    <td>{books[i].author}</td>
                </tr>
            )
        }



        return(
            <div className='card card-reading'>
            <div className='card-body'>
            <div className='display-flex'>
                <div className='container-1 justify-content-center'>



                    <h3>Reading</h3>
                    <hr/>
                    <p>Reading has been a hobby of mine for as long as I could remember. Books stimulate imagination, expand horizon, and transport readers into surreal worlds and realms, all at little to no cost.</p>
                    <p>I have a predisposition for classic science fiction novels, notably those written by H. G. Wells. His futuristic ideas, contrasted with his living in an era before the Scientific Revolution, render his capacity of imagination especially impressive and intriguing. Moreover, his works are not merely entertaining at face value— there is often a deeper political or philosophical nuance left for readers to unearth.</p>
                    <p>I also like to read philosophy, through which I have acquired a greater understanding of myself and my surroundings at large. John Locke, in particular, fascinates me. His liberal ideas and renegade nature against authority renders him an enigmatic philosopher who is far ahead of his time. I recommend everyone to check out John Locke, in particular his Two Treatises of Government.</p>
                    <button className='show-on-mobile btn btn-outline-light'data-toggle='modal' data-target={`#modalToggle_reading`}>Notable Reads</button>
                
                <div className='modal fade' id={`modalToggle_reading`} tabindex='-1' role='dialog' aria-labelledby='#modalTitle' aria-hidden='true'>
                    <div className='awards-modal modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content' id='modal-content-reading'>
                
                            <div className='modal-body text-center'>
                            <h3>10 Notable Novels/Writings I've Read</h3>
                    <hr/>
                    <ul style={{textAlign: 'left',paddingLeft: '30px'}}>

                        {listArray}
                       
                    </ul>
                    
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className='divider-1 hide-on-mobile'></div>
                <div className='divider-2 hide-on-mobile'></div>
                <div className='container-2 hide-on-mobile'>
                    <h3>10 Notable Novels/Writings I've Read</h3>
                    <hr/>
                    <table class="table table-bordered books-table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableArray}
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Reading;