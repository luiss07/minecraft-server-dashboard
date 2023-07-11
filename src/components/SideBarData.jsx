import HomeIcon from '@mui/icons-material/Home';
import TerminalIcon from '@mui/icons-material/Terminal';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StartStop from '@mui/icons-material/PowerSettingsNew';

export const SideBarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: '/',
        targetSegement: null
    },
    {
        title: 'Status',
        icon: <StartStop />,
        link: '/Status',
        targetSegement: 'Status'
    },
    {
        title: 'Console',
        icon: <TerminalIcon />,
        link: '/Console',
        targetSegement: 'Console'
    },
    {
        title: 'Whitelist',
        icon: <PersonAddIcon />,
        link: '/Whitelist',
        targetSegement: 'Whitelist'
    }
]