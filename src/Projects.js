import React from 'react';
import './Projects.css';


class Projects extends React.Component{
    render(){
        return(
            <div class='projects-overall-div'>
                <div class='container'>
                <div class='text-center'><h1>My Projects</h1></div>
                <br/>
                <div className='row project-divs'>
                    <div className='project-div col-sm'>
                        <img className='project-img' src='https://i.imgur.com/JQ85hnz.jpg' alt='SocialShield'/>
                        <div className='hover-background'></div>
                        <div className='project-description'>
                            <div className='add-margin'>
                                <h3>SocialShield</h3>
                                <hr/>
                                <p>SocialShield is a Chrome extension which protects minors and other vulnerable users from harmful and vulgar content on social media platforms.</p>
                                <p>It harnesses Natural Language Processing, Tone Analysis and other machine learning technologies to determine and filter out malicious content and their respective user profiles.</p>
                                <a target='_blank' href='https://chrome.google.com/webstore/detail/socialshield/fkiekmmeinddmjcgnoegicnfjccipiml?hl=en'className='btn btn-outline-light btn-lg'>Link to App</a>
                            </div>
                        </div>
                    </div>
                    <div className='project-div col-sm'>
                        <img className='project-img' src='https://i.imgur.com/peY2Xny.jpg' alt='Opus'/>
                        <div className='hover-background'></div>
                        <div className='project-description'>
                            <div className='add-margin'>
                                <h3>Opus</h3>
                                <hr/>
                                <p>Opus is a web application built on Rails where users can read, post and comment on each other's essays.</p>
                                <p>The core tenet of Opus is to foster creativity and encourage users (especially students) to practice their writing skills.</p>
                                <a target='_blank' href='https://opusweb.herokuapp.com/' className='btn btn-outline-light btn-lg'>Link to Website</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    };
};

export default Projects;