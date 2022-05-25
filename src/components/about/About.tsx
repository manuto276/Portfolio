import './About.css';

import apulia from '../../resources/apulia.svg';
import portrait from '../../resources/portrait.jpg';

function About() {
    return (
        <div className='About'>
            <div className='Description'>
                <img className='Photo' src={portrait} alt='Me' />
                <div>
                    <h3>Something about me.</h3>
                    <p className='Body'>I’m a developer with a great passion for UI/UX Design. I enjoy working with people who love to solve problems through good design experiences.<br/><br/>Beach volley and bodybuilding are some of my other passions.<br/>Currently I am an engineering student @PoliBa.</p>
                </div>
            </div>
        </div>
    );
}

export default About;