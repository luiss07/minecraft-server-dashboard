'use client'

import {NavData} from './data';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation'

const styles = {
    sideBar_element: 'group flex items-center py-4 px-6 text-white text-lg font-mono hover:bg-gray-700',
    sideBar_element_active: 'bg-hover-gray before:absolute before:block before:bg-green-800 before:w-1 before:h-7 before:left-2'
};

const SideNavBar = () => {
  const activeSegment = useSelectedLayoutSegment();
  
  return (
    <div className='flex flex-col w-64 m-0 bg-nav-gray h-[calc(100vh-56px)] z-auto overflow-hidden'>
      { NavData.map ( (val, key) => {
            return <Link 
                    className={(activeSegment != val.targetSegement) ? styles.sideBar_element : (styles.sideBar_element + ' ' + styles.sideBar_element_active)}
                    key={key} 
                    href={val.link}
                  >
                <div className='flex items-center justify-center w-1/3' id='icon'> { val.icon } </div>
                <div className='flex-grow' id='title'> { val.title } </div>
              </Link>
        })}
    </div>
  )
}

export default SideNavBar