import Icon from '../icon/Icon';
import './FloatingActionButton.css';

function FloatingActionButton(props: FloatingActionButtonProps) {
    return (
        <div id={props.id} className={'FloatingButton ' + props.className} style={{backgroundColor: props.color ?? 'white'}} onClick={props.onClick}>
            <Icon icon={props.icon} fill={props.iconColor ?? '#212121'} />
        </div>
    );
}

interface FloatingActionButtonProps {
    id?: string;
    className?: string | undefined;
    onClick?: any;
    icon?: any;
    iconColor?: string | undefined;
    color?: string | undefined;
}

export default FloatingActionButton;