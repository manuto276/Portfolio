import './Link.css';

function Link(props: LinkProps) {
    return (
        <a className="Link" href={props.to} target={props.target ?? '_self'} rel="noreferrer" onClick={props.onClick}>{props.children}</a>
    );
}

interface LinkProps {
    to?: string | undefined;
    target?: string | undefined;
    onClick?: any;
    children?: any;
}

export default Link;