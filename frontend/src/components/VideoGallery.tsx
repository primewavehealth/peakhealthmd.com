// components/VideoGallery.tsx
import React from 'react';
import VideoPlayer from './VideoPlayer';

interface Video {
  src: string;
  title: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  return (
    <div className="video-gallery">
      {videos.map((video, index) => (
        <VideoPlayer key={index} src={video.src} title={video.title} />
      ))}
    </div>
  );
};

export default VideoGallery;