import './Social.css';

import Link from '../../ui/link/Link';
import Icon from '../../ui/icon/Icon';

export default function SocialList() {
    return <div className='SocialList'>
        <Link to='https://www.facebook.com/e.frascella256' target='_blank'>
            <Icon icon={'Facebook'} fill='#212121' />
        </Link>
        <Link to='https://www.instagram.com/e.frascella256/' target='_blank'>
            <Icon icon={'Instagram'} fill='#212121' />
        </Link>
        <Link to='https://www.linkedin.com/in/efrascella256/' target='_blank'>
            <Icon icon={'Linkedin'} viewBox={'0 0 30 30'} fill='#212121' />
        </Link>
        <Link to='https://github.com/manuto276' target='_blank'>
            <Icon icon={'GitHub'} fill='#212121' />
        </Link>
    </div>
}