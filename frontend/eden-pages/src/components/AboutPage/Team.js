import React from 'react'
import './Team.css'
import we from '../../assets/we.jpg'
import Xav from '../../assets/Xav.jpg'
import Ayo from '../../assets/Ayo.png'
import Jea from '../../assets/Jea.jpg'
import Sma from '../../assets/Sma.jpeg'
import Isa from '../../assets/Isa.jpg'
import Kev from '../../assets/Kev.jpg'
const Team = () => {
  return (
    <div>
    <h1 id='tit'>The team</h1>
    <div><p className='team-int'>This is the team that is be working on this amazing project</p></div>
    <div className='team-cont'>
        <div className='team-card'>
            <div className='team-imgcont'><img src={Isa}/></div>
            <div className='team-txt'><p>Hi everyone!, I'm<span className='name'>Isaiah Essien</span> and I am a backend developer with beginner skills in frontend.<br/>
            For backend programming I mainly Use Python, Django and Flask and for my occasional fullstack work I use React Js.<br/>
            On this project, I am a backend developer and occasionally jump on the frontend to help.</p></div>
        </div>
        <div className='team-card'>
            <div className='team-imgcont'><img src={Jea}/></div>
            <div className='team-txt'><p>Hello, I'm <span className='name'>Uwase Jeannine</span>, a full stack developer/ UI/UX designer.<br/> I am familiar with various frameworks and technologies which are React Js, React Native and Next Js for frontend; then python, django and node Js for backend.<br/>
            For Design, I use Figma and Adobe Illustrator; and I am both a designer and a backend developer on this project</p></div>
        </div>
        <div className='team-card'>
            <div className='team-imgcont'><img src={Kev}/></div>
            <div className='team-txt'><p>Hey! I'm <span className='name'>Kevin Simo</span>, a frontend developer, UI/UX designer and researcher.<br/> I use React as a frontend framework then tailwind and bootstrap for my styling; them Figma for my designs.<br/>
            On this project, I am a designer and a frontend developer as well as the head of the frontend team </p></div>
        </div>
        <div className='team-card'>
            <div className='team-imgcont'><img src={Sma}/></div>
            <div className='team-txt'><p>Hello I'm <span className='name'>Israel Smart</span>, A beginner frontend developer, UI designer and an expert UX writer.<br/>
            Aside from contributing on the designs of the project, using my problem management and customer acquisition skills, I help assigning tasks, check in with everyone on their progress; and
            take care of the project's documentation.</p></div>
        </div>
        <div className='team-card'>
            <div className='team-imgcont'><img src={Ayo}/></div>
            <div className='team-txt'><p> I'm <span className='name'>Ayotunde Adeleke</span>, an experienced frontend developer with some knowledge in backend developpement. I am part of the frontend team, and I contribute on designing responsive and interactive web pages;
            with my knowledge of responsive Web Design and JavaScript DOM principles. </p></div>
        </div>
        <div className='team-card'>
            <div className='team-imgcont'><img src={Xav}/></div> 
            <div className='team-txt'><p>My Name is <span className='name'>Dohessiekan Xavier</span>, I am a frontend developer with beginner skills with react Js and a good mastery of the CSS framework bootstrap.<br/>
            I work on the frontend of the project with Kevin Simo and Ayotunde Adeleke.
            </p></div>
        </div>
    </div>
      
    </div>
  )
}

export default Team
