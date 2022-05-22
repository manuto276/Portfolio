import FloatingActionButton from '../floatingactionbutton/FloatingActionButton';
import './SwipeView.css'

export enum SwipeDirection {
    TOP, BOTTOM, LEFT, RIGHT
}

function SwipeView(props: SwipeViewProps) {
    return (
        <div id={props.id} className={'SwipeView ' + (props.visible ? 'Visible ' : '') + (SwipeDirection[props.swipeDirection])}>
            <div className='Scrim' onClick={props.onDismiss} />
            <div className='Page' style={{width: props.width ?? 'auto', height: props.height ?? 'auto'}}>
                <FloatingActionButton className='DismissButton' icon={'Close'} onClick={props.onDismiss}/>
                {props.children}
            </div>
        </div>
    );
}

interface SwipeViewProps {
    id?: string;
    className?: string | undefined;
    visible?: boolean;
    height?: string;
    width?: string;
    children?: any;
    onDismiss?: any;
    swipeDirection: SwipeDirection
}

export default SwipeView;