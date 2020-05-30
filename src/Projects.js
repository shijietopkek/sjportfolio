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
                    <div className='project-div col-md-6'>
                        <img className='project-img' src='https://i.imgur.com/JQ85hnz.jpg' alt='SocialShield'/>
                        <div className='hover-background'></div>
                        <div className='project-description'>
                            <div className='add-margin'>
                                <h3>SocialShield</h3>
                                <hr/>
                                <p>SocialShield is a Chrome extension which protects minors and other vulnerable users from harmful and vulgar content on social media platforms.</p>
                                <p className='hide-on-mobile'>It harnesses Natural Language Processing, Tone Analysis and other machine learning technologies to determine and filter out malicious content and their respective user profiles.</p>
                                <a target='_blank' href='https://chrome.google.com/webstore/detail/socialshield/fkiekmmeinddmjcgnoegicnfjccipiml?hl=en'className='btn btn-outline-light btn-lg'>Link to App</a>
                            </div>
                        </div>
                    </div>
                    <div className='project-div col-md-6'>
                        <img className='project-img' src='https://i.imgur.com/peY2Xny.jpg' alt='Opus'/>
                        <div className='hover-background'></div>
                        <div className='project-description'>
                            <div className='add-margin'>
                                <h3>Opus</h3>
                                <hr/>
                                <p>Opus is a web application built on Rails where users can read, post and comment on each other's essays.</p>
                                <p className='hide-on-mobile'>The core tenet of Opus is to foster creativity and encourage users (especially students) to hone their writing skills.</p>
                                <a target='_blank' href='https://opusweb.herokuapp.com/' className='btn btn-outline-light btn-lg'>Link to Website</a>
                            </div>
                        </div>
                    </div>
                    <div className='project-div col-md-6'>
                        <img className='project-img' src='https://i.imgur.com/C4vlVN9.jpg' alt='PomodoroTimer'/>
                        <div className='hover-background'></div>
                        <div className='project-description'>
                            <div className='add-margin'>
                                <h3>PomodoroTimer</h3>
                                <hr/>
                                <p>PomodoroTimer is an Android application built in React Native. It utilises the Pomodoro technique to boost productivity and includes a background music playback option.</p>
                                <p className='hide-on-mobile'>The impetus behind the development of the app is to cater to my own needs and practice my React Native skills in the process.</p>
                                <a target='_blank' href='https://drive.google.com/open?id=1_ReJ6brfCwT5u61Quzg76aTBNh6prdO3' className='btn btn-outline-light btn-lg'>Link to APK</a>
                            </div>
                        </div>
                    </div>
                    <div className='project-div col-md-6'>
                        <img className='project-img' src='https://i.imgur.com/PWzz5qB.jpg' alt='Covid19TrendsnData'/>
                        <div className='hover-background'></div>
                        <div className='project-description'>
                            <div className='add-margin'>
                                <h3>PomodoroTimer</h3>
                                <hr/>
                                <p>Covid19TrendsnData is a multi-faceted web application showcasing data visualisations related to the pandemic.</p>
                                <p className='hide-on-mobile'>Besides providing a dashboard for users to view Covid-19 trends and insights, the website also provides a platform for users to share their own visualisations or those from other sources.</p>
                                <a target='_blank' href='https://covid19trendsndata.herokuapp.com' className='btn btn-outline-light btn-lg'>Link to Website</a>
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