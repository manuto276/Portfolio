import Social from '../social/Social';
import './Title.css';

export default function Title() {
    return (
        <div className='Title'>
            <div className='Splash'>
                <h2>Hello there,<br></br>I’m Emanuele.</h2>
                <Social />
            </div>
            <p className="Body">Engineering Student and Freelance Developer based in Taranto, Italy.</p>
        </div>
    );
}