import './Link.css';

export default function Link(props: any) {
    return <a className="Link" href={props.to} target={props.blank ? '_blank' : ''} rel="noreferrer" onClick={props.onClick}>{props.children}</a>
}