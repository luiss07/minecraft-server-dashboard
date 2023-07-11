'use client'

import {SideBarData} from './SideBarData';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation'

const SideNavBar = () => {
  const activeSegment = useSelectedLayoutSegment();
  
  return (
    <div className='w-64 bg-sideNav-bg h-full overflow-auto'>
      {SideBarData.map ( (val, key) => {
            return <Link 
                    className={(activeSegment != val.targetSegement) ? 'sideBar_element' : 'sideBar_element sideBar_element_active'}
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