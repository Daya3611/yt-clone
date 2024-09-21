import { useAppContext } from '@/useContextHook/useContextApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function VideoDetails() {
  const { categoryId, videoId } = useParams();
  const { setloading } = useAppContext();
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchSelectedVideoDetails = async () => {
    setloading(true);
    try {
      const data = await fetchApiForYoutubeData(`videos`, {
        part: 'snippet,contentDetails,statistics',
        id: videoId,
      });
      setSelectedVideoDetails(data?.items[0]);
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchSelectedVideoDetails();
  }, [videoId]);

  const fetchChannelData = async () => {
    if (!selectedVideoDetails?.snippet?.channelId) return;
    
    setloading(true);
    try {
      const data = await fetchApiForYoutubeData(`channels`, {
        part: 'snippet,contentDetails,statistics',
        id: selectedVideoDetails?.snippet?.channelId,
      });
      setChannelData(data?.items[0]);
    } catch (error) {
      console.error('Error fetching channel data:', error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (selectedVideoDetails) {
      fetchChannelData();
    }
  }, [selectedVideoDetails]);

  return (
    <div>
      {/* Your component JSX goes here */}
    </div>
  );
}

export default VideoDetails;
