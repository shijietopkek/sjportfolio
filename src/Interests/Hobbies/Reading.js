import React from 'react';
import './Reading.css'

class Reading extends React.Component{
    render(){
        return(
            <div className='card card-reading'>
            <div className='card-body'>
            <div className='display-flex'>
                <div className='container-1 justify-content-center'>



                    <h3>Reading</h3>
                    <hr/>
                    <p>Reading has been a hobby of mine for as long as I could remember. Books stimulate imagination, expand horizon, and transport readers into surreal and other-worldly realms, all at little to no cost.</p>
                    <p>I have a predisposition for classic science fiction novels, notably those written by H. G. Wells. His futuristic ideas, contrasted with his living in an era before the Scientific Revolution, render his capacity of imagination especially impressive and intriguing. Moreover, his works are not merely entertaining at face value- there is often a deeper political or philosophical nuance left for readers to unearth.</p>
                    <p>In recent years, I started mulling over philosophical texts. Through this difficult endeavour I have acquired a greater understanding of myself and my surroundings at large. John Locke, in particular, fascinates me. His liberal ideas and renegade nature against authority renders him an enigmatic philosopher who is far ahead of his time. I recommend everyone to check out John Locke, in particular his Two Treatises of Government.</p>

                </div>
                <div className='divider-1'></div>
                <div className='divider-2'></div>
                <div className='container-2'>
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
                            <tr>
                            <th scope="row">1</th>
                            <td>The Plague</td>
                            <td>Albert Camus</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Crime and Punishment</td>
                            <td>Fyodor Doestoyesky</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Uncle Tom's Cabin</td>
                            <td>Harriet Beecher Stowe</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>The Alchemist</td>
                            <td>Paulo Coelho</td>
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                            <td>The Island of Dr Moreau</td>
                            <td>H. G. Wells</td>
                            </tr>
                            <tr>
                            <th scope="row">6</th>
                            <td>The Time Machine</td>
                            <td>H. G. Wells</td>
                            </tr>
                            <tr>
                            <th scope="row">7</th>
                            <td>Two Treatises of Government</td>
                            <td>John Locke</td>
                            </tr>
                            <tr>
                            <th scope="row">8</th>
                            <td>Fahrenheit 451</td>
                            <td>Ray Bradbury</td>
                            </tr>
                            <tr>
                            <th scope="row">9</th>
                            <td>Twelve Years a Slave</td>
                            <td>Solomon Northup</td>
                            </tr>
                            <tr>
                            <th scope="row">9</th>
                            <td>Leviathan</td>
                            <td>Thomas Hobbes</td>
                            </tr>
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