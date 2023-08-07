import HomeIcon from '@mui/icons-material/Home';
import TerminalIcon from '@mui/icons-material/Terminal';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StartStop from '@mui/icons-material/PowerSettingsNew';

export const NavData = [
    {
        title: 'Home',
        icon: <HomeIcon className='fill-gray-600 group-hover:fill-white'/>,
        link: '/',
        targetSegement: null
    },
    {
        title: 'Status',
        icon: <StartStop className='fill-gray-600 group-hover:fill-white'/>,
        link: '/status',
        targetSegement: 'status'
    },
    {
        title: 'Console',
        icon: <TerminalIcon className='fill-gray-600 group-hover:fill-white'/>,
        link: '/console',
        targetSegement: 'console'
    },
    {
        title: 'Whitelist',
        icon: <PersonAddIcon className='fill-gray-600 group-hover:fill-white'/>,
        link: '/whitelist',
        targetSegement: 'whitelist'
    }
]