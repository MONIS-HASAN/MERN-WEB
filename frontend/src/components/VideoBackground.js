import React from 'react';
import './VideoBackground.css';
import videooe from '../assets/particles.mp4'

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={videooe} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;