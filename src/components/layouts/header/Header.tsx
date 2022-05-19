import './Header.css';

import logo from '../../../resources/logo.svg';

import MediaQuery from "react-responsive";
import Link from '../../ui/link/Link';
import SvgIcon from '../../ui/icon/Icon';

export default function Header(props: any) {
    return (
        <div className="Header">
            <img className="Logo" src={logo} alt=""></img>
            <div className="Navigation">
                <Link onClick={props.onAbout}>
                    <p className="Body">About me</p>
                </Link>
                <div className="Divider"></div>
                <Link to='mailto: emanuele.frascella256@gmail.com'>
                    <MediaQuery maxWidth={579}>
                        {//<SvgIcon icon={'EmailOutline'} />
                        }
                    </MediaQuery>
                    <MediaQuery minWidth={580}>
                        <p className="Body">emanuele.frascella256@gmail.com</p>
                    </MediaQuery>
                </Link>
            </div>
        </div>
    );
}