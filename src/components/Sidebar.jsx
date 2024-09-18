import { useAppContext } from '@/useContextHook/useContextApi'
import { categories, menuItems } from '@/utils/constant';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import MenuItms from './MenuItms';

function Sidebar(onclick,isSelected) {
  const {mobileMenu,selectedCategory,setSelectedCategory} = useAppContext();

  const navigate = useNavigate();
  const handelCategoryClick = (id) =>{
    setSelectedCategory(id);
    if(name === 'Home'){
      navigate('/');
    }
  }

  return (
    <div className={`mt-[80px] md:block overflow-y-auto h-full py-4 w-[300px] absolute md:relative z-10 dark:border-gray-700 bg-white dark:bg-black border-gray-200 border ${mobileMenu? "block z-10" : "hidden z-auto"}`}>
      <div className='flex flex-col px-5 mb-20'>
        {categories.map((item) => (
          
          <MenuItms
          key={item.id}
          item={item}
          isSelected={item.id === selectedCategory}
          onclick={()=> handelCategoryClick (item.id, item.name)}
          />

          
        ))}
        <hr className='my-3 dark:border-gray-600 border-gray-300' />

        {menuItems.map((item) => (
          
          <MenuItms
            key={item.name}
            item={item}
            isSelected={false}
          />
        ))}

          <hr className='my-3 dark:border-gray-600 border-gray-300' />
            <div className='flex items-center text-sm justify-center '>
              Made By Daya3611
            </div>
      </div>
      
    </div>
  )
}

export default Sidebar
