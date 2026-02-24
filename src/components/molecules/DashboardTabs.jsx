import React from 'react'
import { NavLink } from 'react-router'

function DashboardTabs( {icon, title, path} ) {
  return (
    <>
      <NavLink to={path}>
        {
          ({isActive}) => (
            <div
              className={
              `flex gap-2 items-center py-2 px-3 md:py-3 md:px-4 rounded-lg cursor-pointer transition-all
              ${isActive
                ? 'bg-[--light-yellow-color] shadow-sm text-[--dark-yellow-color]'
                : 'group hover:shadow-sm hover:bg-[#F4F5FA]'
              }
              `
              }
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} className={`transition-all
                ${isActive ? 'fill-[--dark-yellow-color]' : 'fill-[--base-color] group-hover:fill-[--dark-color]'}
                `} viewBox={"0 0 24 24"}>
                {icon}
              </svg>
              <div >
              </div>
              <p className={`transition-all font-medium md:font-semibold ${isActive ? 'text-[--dark-yellow-color]' : 'group-hover:text-[--dark-color]'}`}>{title}</p>
            </div>
          )
        }
      </NavLink>
    </>
  )
}

export default DashboardTabs