import React from 'react';
import './ProjectList.css';
import ScrollView from './ScrollView';

export default function ProjectList(props: any) {
    const [position, setPosition] = React.useState({top: 0, left: 0});
    const [cursorVisible, setCursorVisible] = React.useState(false);

    function CursorHelper(e: React.MouseEvent) {
        var x = e.clientX;
        var y = e.clientY + e.currentTarget.parentElement?.parentElement?.scrollTop!; // Yeah... wtf?
        setPosition({top: y, left: x});
    }

    return (
        <div className="ProjectList" onMouseMove={(e) => CursorHelper(e)} onMouseEnter={() => setCursorVisible(true)} onMouseLeave={() => setCursorVisible(false)}>
            {props.children}
            <ScrollView visible={cursorVisible} top={position.top} left={position.left} />
        </div>
    );
}