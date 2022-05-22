import './About.css';

import Introduction from './Introduction';
import FloatingActionButton from '../../ui/floatingbutton/FloatingActionButton';

export default function About(props: any) {
    return (
        <div className={'About' + (props.show ? ' Show' : '')}>
            <div className='Scrim' onClick={props.onDismiss}></div>
            <div className='Content'>
                <div className='DismissContainer'>
                    <FloatingActionButton id='DismissButton' icon={'Close'} onClick={props.onDismiss}/>
                </div>
                <Introduction />
            </div>
        </div>
    );
}

