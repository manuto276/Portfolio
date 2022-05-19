import Icon from '../icon/Icon';
import './FloatingButton.css';

export default function FloatingButton(props: any) {
    return (
        <div id={props.id} className={"FloatingButton " + props.className} onClick={props.onClick}>
            <Icon icon={props.icon} fill='#212121' />
        </div>
    );
}