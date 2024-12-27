
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-contrib-quality-levels';

const MediaPlayer = ({options, title}) => 
{
    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {

    const player =  playerRef.current;

    if(!player)
    {
        const videoElement = videoRef.current;
        if(!videoElement)
            return

        playerRef.current = videojs(videoElement, options);
    }

    return () => 
    {
        if (player) 
        {
            player.dispose();
            playerRef.current = null;
        }
    }},[options, videoRef, playerRef]);

  return (
    <div>
      <video
        ref={videoRef}
        style={{height: '100%',  width:'100%'}}
        className="video-js vjs-default-skin">
      </video>
      <p>{title}</p>
    </div>
  );
};

export default MediaPlayer;
