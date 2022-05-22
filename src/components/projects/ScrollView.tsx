import MediaQuery from 'react-responsive';
import SvgIcon from '../icon/Icon';
import './ScrollView.css'

export default function ScrollView(props: any) {
    const view = 'View';
    return (
        <div className={'ScrollView' + (props.visible ? ' Visible' : ' Hidden')} style={{top: props.top, left: props.left}}>
            <MediaQuery maxWidth={1023}>
                <SvgIcon icon={'KeyboardArrowLeft'} fill='white' />
                <p className='Body'>{view}</p>
                <SvgIcon icon={'KeyboardArrowRight'} fill='white' />
            </MediaQuery>
            <MediaQuery minWidth={1024}>
                <SvgIcon icon={'KeyboardArrowUp'} fill='white' />
                <p className='Body'>{view}</p>
                <SvgIcon icon={'KeyboardArrowDown'} fill='white' />
            </MediaQuery>
        </div>
    );
}