import React from 'react';
import './Piano.css'

class Piano extends React.Component{
    render(){
        const pieces = [{title: 'Étude in C minor, Op. 10, No. 12, Revolutionary', composer:'Frédéric Chopin'},
        {title: 'Nocturne in E-flat major, Op. 9, No. 2', composer:'Frédéric Chopin'},
        {title: 'Nocturne No. 20 in C -sharp minor, Op. posth.', composer:'Frédéric Chopin'},
        {title: 'Waltz in C-sharp minor, Op. 64, No. 2', composer:'Frédéric Chopin'},
        {title: 'Waltz in B minor, Op. 69, No. 2', composer:'Frédéric Chopin'},
        {title: 'Prelude in C-sharp minor, Op. 3, No. 2', composer:'Sergei Rachmaninoff'},
        {title: 'Piano Sonata No. 16 in C major, K. 545', composer:'Wolfgang Amadeus Mozart'},
        {title: 'Invention in A minor, No. 13, BWV 784', composer:'Johann Sebastian Bach'},
        {title: 'The Entertainer', composer:'Scott Joplin'},{title: 'Maple Leaf Rag', composer:'Scott Joplin'}]

        let listArray = [];
        let tableArray = [];
        for(let i=0; i<pieces.length;i++){
            listArray.push(
                <li>
                    <b>{pieces[i].title}</b>
                    <p>{pieces[i].composer}</p>
                </li>
            )
            tableArray.push(
                <tr>
                    <th scope="row">{i+1}</th>
                    <td>{pieces[i].title}</td>
                    <td>{pieces[i].composer}</td>
                </tr>
            )
        }

        
        return(
            <div className='card card-piano'>
            <div className='card-body'>
            <div className='display-flex'>
                <div className='container-1 justify-content-center'>
                    <h3>Piano</h3>
                    <hr/>
                    <p>I picked up piano when I was 15. Within 3 years, I was able to attain Grade 6 for both Practical and Music Theory. My grade progression came to an abrupt halt due to A-Levels and NS commitments, but my love for the instrument never ceased.</p>
                    <p>Piano has enriched my life beyond all measurable thresholds. For me, the sound of notes stringed together in a complex harmony paints a picture of sublime beauty that no pop music can achieve. Every note, every measure, every form of articulation, I indulge in to my heart's content.</p>
                    
                    <div className='hide-on-mobile'>
                    <p>Below is a video of Rachmaninoff Piano Concerto. No. 2, played by the maestro himself. It is arguably one of the best, if not the best piano concerto ever written. I suggest every one to give it a listen, especially the first movement.</p>
                    <div className='text-center'>
                    <iframe width="420" height="250" src="https://www.youtube.com/embed/pBx-tr1FDvY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    </div>
                    <p>Piano serves as a companion offering me spiritual respite from the everyday humdrum of life, without which my life would be much devoid of color.</p>
                    <button className='show-on-mobile btn btn-outline-light'data-toggle='modal' data-target={`#modalToggle_piano`}>My Repertoire</button>
                
                <div className='modal fade' id={`modalToggle_piano`} tabindex='-1' role='dialog' aria-labelledby='#modalTitle' aria-hidden='true'>
                    <div className='awards-modal modal-dialog modal-dialog-centered' role='document'>
                        <div className='modal-content' id='modal-content-piano'>
                
                            <div className='modal-body text-center'>
                            <h3>10 Notable Pieces from my Repertoire</h3>
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
                    <h3>10 Notable Pieces from my Repertoire</h3>
                    <hr/>
                    <table class="table table-bordered repertoire-table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Composer</th>
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
export default Piano;