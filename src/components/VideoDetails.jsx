"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '@/useContextHook/useContextApi';
import { fetchApiForYoutubeData } from '@/utils/fetchApi';

function VideoDetails() {
  const { videoId } = useParams();
  const { setLoading, selectedVideoDetails, setSelectedVideoDetails, channelData, setChannelData } = useAppContext();

  const fetchSelectedVideoDetails = async () => {
    setLoading(true);
    try {
      const data = await fetchApiForYoutubeData('videos', {
        part: 'snippet,contentDetails,statistics',
        id: videoId
      });
      setSelectedVideoDetails(data?.items[0]);
    } catch (error) {
      console.error('Error fetching video details:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchChannelData = async () => {
    if (selectedVideoDetails?.snippet?.channelId) {
      setLoading(true);
      try {
        const data = await fetchApiForYoutubeData('channels', {
          part: 'snippet,contentDetails,statistics',
          id: selectedVideoDetails?.snippet?.channelId
        });
        setChannelData(data?.items[0]);
      } catch (error) {
        console.error('Error fetching channel data:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchSelectedVideoDetails();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
  }, [selectedVideoDetails]);

  return (
    <div className='flex justify-center flex-row h-full dark:bg-black dark:text-white bg-white text-black'>
      <div className='w-full flex flex-col p-4 lg:flex-row lg:space-x-4'>
        <div className='flex flex-col lg:w-[70%] px-4 py-3 lg:py-6 overflow-auto'>
          <div className='h-[300px] md:h-[450px] lg:h-[500px] xl:h-[600px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0'>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              className='rounded-lg'
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
