// components/VideoPlayer.tsx
import React from 'react';

interface VideoPlayerProps {
  src: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
  return (
    <div className="video-player">
      <h3>{title}</h3>
      <h3>{src}</h3>
      <video width="320" height="240" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;