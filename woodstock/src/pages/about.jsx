import React from 'react';
import chair from '../images/chair.png';

const About = () => {
    return <div className="about">
        <div className="about_left">
            <img className="chair_img" src={chair} alt="chair"/>
        </div>
        <div className="about_right">
            <div className="about_right_text">
                <h2>ABOUT US</h2>
                <p>Look, just because I don't be ginin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyse my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?</p>
            </div>
            <a href="#" className="buttonOneTwo">LEARN MORE</a>
        </div>
    </div>;
};

export default About;