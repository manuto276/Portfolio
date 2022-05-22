import './Project.css';

export default function Project(props: any) {
    return (
        <div className="Project">
            {props.preview != null ? <img src={props.preview}></img> : <div className="Empty"></div>}
        </div>
    );
}