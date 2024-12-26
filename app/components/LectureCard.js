'use client'

import Image from 'next/image'
import video from '@/assets/video.png'
import { useState } from 'react'
import upload from '@/assets/upload.png'
import axios from 'axios'
// import Upload from '../upload/Upload'
import editIcon from '@/assets/edit.png' 
// import VideoJS from '../mediaPlayer/MediaPlayer'
// import ReactPlayer from 'react-player'
// import SoundCloudPlayer from 'react-player/soundcloud'
// import YouTubePlayer from 'react-player/youtube'

const Lecturecard = ({lecture, level, type}) =>
{
    const [ play, setPlay ] = useState(false);
    const [ videoSrc, setVideo ] = useState(null);
    const [ showUpload,  setShowUpload ] = useState(false);

    const videojsOptions = {
        autoplay: false,
        controls: true,
        sources: [{
            src: videoSrc,
            type: 'video/mp4'
        }]
    }
    
    const handlePlay = async () =>
    {
        try
        {
            const url = '/api/videos'
            const response = await axios.post(url, {objectKey: 'test'});
            setVideo(response.data);
            setPlay(true);
            
        }
        catch(error)
        {
            toast.error(error.message);
        }
    }

    // DAY 17 Practice Questions.mp4

    return(
        <div className='w-full text-base flex flex-col gap-2 justify-between rounded shadow-md bg-gray-100 p-6 z-10' >
            {type === 'dashboard' ? <p >{lecture.title}</p> : <p>{lecture.title}</p>}
            {level === 'visitor' ? 
            <p className='text-gray-500'>2 hours</p> :
            <div >
                <Image src={lecture.recording.length > 1 ? editIcon  : upload} alt='upload' onClick={()=> setShowUpload(true)}/>
                <button onClick={handlePlay}><Image  src={video} alt='icon'/> <span >Watch Recording</span></button>
            </div>}

            {/* {showUpload && 
            <div className={styles.uploadWrapper}>
                <Upload setShowUpload={setShowUpload}/>
            </div>} */}

            {play && 
            <div >
                
                {/* <VideoJS options={videojsOptions} title={lecture.title}/> */}
                <button onClick={()=> setPlay(false)}>Back</button>
            </div>}
        </div>
    )
}

export default Lecturecard