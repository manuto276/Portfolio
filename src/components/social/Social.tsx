import SvgIcon from '../icon/Icon';
import Link from '../link/Link';
import './Social.css';

export default function SocialList() {
    return <div className='SocialList'>
        <Link to='https://www.facebook.com/e.frascella256' target='_blank'>
            <SvgIcon icon={'Facebook'} fill='#212121' />
        </Link>
        <Link to='https://www.instagram.com/e.frascella256/' target='_blank'>
            <SvgIcon icon={'Instagram'} fill='#212121' />
        </Link>
        <Link to='https://www.linkedin.com/in/efrascella256/' target='_blank'>
            <SvgIcon icon={'Linkedin'} viewBox={'0 0 30 30'} fill='#212121' />
        </Link>
        <Link to='https://github.com/manuto276' target='_blank'>
            <SvgIcon icon={'GitHub'} fill='#212121' />
        </Link>
    </div>
}