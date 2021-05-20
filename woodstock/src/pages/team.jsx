import React from 'react';
import work from '../images/work_small.png';

const Team = () =>{
    return <div className="team">
        <div className="team_left">
            <img className="work_img" src={work} alt="work"/>
        </div>
        <div className="yellow_filter"></div>
        <div className="team_right"></div>
            <span className="logo">W O O D</span>
            <h2>CREATIVE TEAM</h2>
            <h3>GOOG MINDSET</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostud
            exercication ullamco laboris nisi ut aliquip ex ea commodo
            consequal. Duis aute irure dolor in reprehenderit in
            voluptate velit esse ciilum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident. Sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="#" className="meet_button">MEAT THE TEAM</a>
    </div>;
}

export default Team;