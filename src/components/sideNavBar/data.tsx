import { FC } from 'react';
import { Home, Terminal, PersonAdd, PowerSettingsNew } from '@mui/icons-material';

interface NavItem {
    title: string;
    icon: JSX.Element;
    link: string;
    targetSegement: string | null;
}

export const NavData: NavItem[] = [
    {
        title: 'Home',
        icon: <Home className='fill-gray-600 group-hover:fill-white'/>,
        link: '/',
        targetSegement: null
    },
    {
        title: 'Status',
        icon: <PowerSettingsNew className='fill-gray-600 group-hover:fill-white'/>,
        link: '/status',
        targetSegement: 'status'
    },
    {
        title: 'Console',
        icon: <Terminal className='fill-gray-600 group-hover:fill-white'/>,
        link: '/console',
        targetSegement: 'console'
    },
    {
        title: 'Whitelist',
        icon: <PersonAdd className='fill-gray-600 group-hover:fill-white'/>,
        link: '/whitelist',
        targetSegement: 'whitelist'
    }
]