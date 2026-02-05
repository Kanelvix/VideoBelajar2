import React from 'react'

const tabs = [
  {
    tab: "Semua Kelas",
    selected: true
  },
  {
    tab: "Pemasaran",
    selected: false
  },
  {
    tab: "Desain",
    selected: false
  },
  {
    tab: "Pengembangan Diri",
    selected: false
  },
  {
    tab: "Bisnis",
    selected: false
  }
]

function CategoryTabs() {
  return (
    <div className='flex gap-9 h-16 w-full overflow-x-auto no-scrollbar'>
      {tabs.map((tab) => (
        <p className={`${tab.selected === true ? (
            'text-[--red-color] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[6px] after:w-12 after:bg-[--red-color] after:rounded-lg'
          ) : ( 
            '' 
          )}
          font-medium h-full flex items-center cursor-pointer flex-shrink-0 text-sm md:text-base
        `} key={tab.tab}>{tab.tab}</p>
      ))}
    </div>
  )
}

export default CategoryTabs