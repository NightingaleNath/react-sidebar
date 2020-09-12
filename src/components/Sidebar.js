import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

const Sidebar = [
    {
        id: 1,
        title: 'Home',
        url: '/',
        icons: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        id: 2,
        title: 'Report',
        url: '/report',
        icons: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        id: 3,
        title: 'Product',
        url: '/product',
        icons: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
    
    {
        id: 4,
        title: 'Team',
        url: '/team',
        icons: <IoIcons.IoMdPeople/>,
        cName: 'nav-text'
    },

    {
        id: 5,
        title: 'Message',
        url: '/message',
        icons: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },

    {
        id: 6,
        title: 'Support',
        url: '/support',
        icons: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    }
    
];

export default Sidebar;