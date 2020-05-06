import React from 'react';
import './Piano.css'

class Piano extends React.Component{
    render(){
        return(
            <div className='card card-piano'>
            <div className='card-body'>
            <div className='display-flex'>
                <div className='container-1 justify-content-center'>
                    <h3>Piano</h3>
                    <hr/>
                    <p>I picked up piano when I was 15. Within 3 years, I was able to attain Grade 6 for both Practical and Music Theory. My grade progression came to an abrupt halt due to A-Levels and NS commitments, but my love for the instrument never ceased.</p>
                    <p>Piano has enriched my life beyond all measurable thresholds. For me, the sound of notes stringed together in a complex harmony paints a picture of sublime beauty that no pop music can achieve. Every note, every measure, every form of articulation, I indulge in to my heart's content.</p>
                    <p>Below is a video of Rachmaninoff Piano Concerto. No. 2, played by the maestro himself. It is arguably one of the best, if not the best piano concerto ever written. I suggest every one to give it a listen, especially the first movement.</p>
                    <div className='text-center'><iframe width="420" height="250" src="https://www.youtube.com/watch?v=pBx-tr1FDvY"/></div>
                    <p>Piano serves as a companion offering me spiritual respite from the everyday humdrum of life, without which my life would be much devoid of color.</p>

                </div>
                <div className='divider-1'></div>
                <div className='divider-2'></div>
                <div className='container-2'>
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

                            <tr>
                            <th scope="row">1</th>
                            <td>Étude in C minor, Op. 10, No. 12, Revolutionary</td>
                            <td>Frédéric Chopin</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Nocturne in E-flat major, Op. 9, No. 2</td>
                            <td>Frédéric Chopin</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Nocturne No. 20 in C -sharp minor, Op. posth.</td>
                            <td>Frédéric Chopin</td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Waltz in C-sharp minor, Op. 64, No. 2</td>
                            <td>Frédéric Chopin</td>
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                            <td>Waltz in B minor, Op. 69, No. 2</td>
                            <td>Frédéric Chopin</td>
                            </tr>
                            <tr>
                            <th scope="row">6</th>
                            <td>Prelude in C-sharp minor, Op. 3, No. 2</td>
                            <td>Sergei Rachmaninoff</td>
                            </tr>
                            <tr>
                            <th scope="row">7</th>
                            <td>Piano Sonata No. 16 in C major, K. 545</td>
                            <td>Wolfgang Amadeus Mozart</td>
                            </tr>
                            <tr>
                            <th scope="row">8</th>
                            <td>Invention in A minor, No. 13, BWV 784</td>
                            <td>Johann Sebastian Bach</td>
                            </tr>
                            <tr>
                            <th scope="row">9</th>
                            <td>The Entertainer</td>
                            <td>Scott Joplin</td>
                            </tr>
                            <tr>
                            <th scope="row">9</th>
                            <td>Maple Leaf Rag</td>
                            <td>Scott Joplin</td>
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
export default Piano;