import React from 'react'

function MenuItms({item , isSelected, onclick}) {
  return (
    <div onClick={item.type === 'category' ? onclick :"undefined"} className={`px-4 py-3 flex items-center space-x-4 rounded-2xl cursor-pointer dark:text-gray-300 bg-transparent text-gray-500 dark:bg-transparent  ${isSelected ? " dark:hover:bg-gray-700 ": "  hover:bg-gray-300"}`}>
      
      <span className='text-xl dark:text-gray-300 text-gray-800'>
        {item.icon}
      </span>
      <span className='font-medium dark:text-gray-300 text-gray-800'>
        {item.name}
      </span>
    </div>
  )
}

export default MenuItms
