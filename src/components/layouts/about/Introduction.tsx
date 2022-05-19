import './Introduction.css';

import arrow from '../../../resources/arrow.svg';
import portrait from '../../../resources/portrait.jpg';
import MediaQuery from 'react-responsive';
import { FlexBox } from 'react-layout-library';

export default function Introduction() {
    return (
        <section className='Introduction'>
            <MediaQuery maxWidth={799}>
                <FlexBox direction='column'>
                    <div className='PortraitContainer'>
                        <div className='Border' />
                        <img className='Portrait' src={portrait} />
                    </div>
                    <h3>This is me.</h3>
                    <p className='Body'>I’m a developer with a great passion for UI/UX Design. I enjoy working with people who love to solve problems through good design experiences.<br></br><br></br>Beach volley matches and gym are some of my other passions, and I’m currently a student @PoliBa.</p>
                </FlexBox>
            </MediaQuery>
            <MediaQuery minWidth={800}>
                <FlexBox direction='column'>
                    <img className='Arrow' src={arrow} />
                    <h3>This is me.</h3>
                </FlexBox>
                <FlexBox direction='column'>
                    <div className='PortraitContainer'>
                        <div className='Border' />
                        <img className='Portrait' src={portrait} />
                    </div>
                    <p className='Body'>I’m a developer with a great passion for UI/UX Design. I enjoy working with people who love to solve problems through good design experiences.<br></br><br></br>Beach volley matches and gym are some of my other passions, and I’m currently a student @PoliBa.</p>
                </FlexBox>
            </MediaQuery>
        </section>
    );
}
