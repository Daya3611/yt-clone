import { useAppContext } from '@/useContextHook/useContextApi';
import React from 'react'
import Sidebar from './Sidebar';
import VideoList from './VideoList';

function Feed() {
  const {loading, videoData} = useAppContext();
  return (
    <div className='flex flex-row h-screen dark:bg-black dark:text-gray-300 bg-white text-gray-800'>
      <Sidebar/>
      <div className='w-full grow overflow-y-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-3 p-5 mt-[100px]'>
        {! loading && videoData?.map((item) =>(
          <div key={item?.id}>
          <VideoList video={item}/>
          </div>
        ))} 
        </div>

      </div>
    </div>
  )
}

export default Feed
