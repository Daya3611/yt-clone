import { formatDuration, formatPublishTime, formatViewCount } from '@/utils/helper';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { fetchApiForYoutubeData } from '@/utils/fetchApi';
import { set } from 'date-fns';
function VideoList({video}) {
  const [channelData,setChannelData] = useState();


  const fetchChannelData = async() =>{

   const data = await fetchApiForYoutubeData (`channels`,{
      part:'snippet,contentDetails,statistics',
      id:video?.snippet?.channelId
    })
    setChannelData(data?.items[0]);
  }

  useEffect(() =>{
    fetchChannelData();
  },[video])

  return (
    <div className=''>
      <Link href={`video/${video.snippet.categoryId}/${video.id}`}>

      <div className='flex flex-col'>
        <div className='relative md:rounded-xl overflow-hidden  items-center'>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className='rounded-xl object-contain w-full '/>

        <span className='absolute bottom-4 right-0 bg-gray-800 text-white text-sm p-1 m-1 rounded-md'>
              {formatDuration(video?.contentDetails?.duration)}
        </span>

        {/* <div className='absolute bottom-4 right-0 bg-gray-100'>
          <h1>{video.snippet.title.slice(0,55)}</h1>
          <p>{video.snippet.channelTitle.slice(0,55)}.....</p>
          <p>{video.snippet.publishedAt}</p>
        </div>  */}
        </div>
        <div className='flex mt-3'>
            <div className='flex items-center'>
              <div className='flex h-9 w-9 rounded-full overflow-hidden'>
              <img src={channelData?.snippet?.thumbnails?.medium?.url} alt={video?.snippet?.title} className='rounded-xl object-contain w-full '/>
              </div>
            </div>
            <div className='flex flex-col ml-3 overflow-hidden dark:bg-black dark:text-gray-300 bg-transparent text-gray-700'>
            <h3 className='text-md font-bold'>{video.snippet.title.slice(0,55)}...</h3>

              <div className='text-sm dark:text-gray-300 text-gray-800'>
                {video?.snippet?.channelTitle}  
              
              </div>

              <div className='text-sm dark:text-gray-300 text-gray-800'>
                {formatViewCount(video?.statistics?.viewCount)} views . {formatPublishTime(video.snippet.publishedAt)}  
              
              </div>
            </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default VideoList
{/* <img src={video.snippet.thumbnails.medium.url} alt="" className='rounded-lg'/>
        <div>
          <h1>{video.snippet.title}</h1>
          <p>{video.snippet.channelTitle}</p>
          <p>{video.snippet.publishedAt}</p>
        </div> */}