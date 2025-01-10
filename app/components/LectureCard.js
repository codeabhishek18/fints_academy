'use client'

import { useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import MediaPlayer from './MediaPlayer'

const Lecturecard = ({lecture, level}) =>
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
            // setPlay(true);
        }
        catch(error)
        {
            toast.error(error.message);
        }
    }

    console.log(lecture)

    // DAY 17 Practice Questions.mp4

    return(
        <div className='flex items-start gap-2 justify-between rounded shadow-md'>
            
            <div className='space-y-2 w-full'>
            {lecture.modules.map((module, index)=>
            (
                <p className='bg-black w-full p-4 border border-gray-800 rounded-xl shadow-md' key={index}>{module}</p>
            ))}
            </div>
            {level !== 'visitor' && <Button onClick={handlePlay}>Watch recording</Button>}
           
            {/* {showUpload && 
            <div className={styles.uploadWrapper}>
                <Upload setShowUpload={setShowUpload}/>
            </div>} */}

            {play && 
            <div >
                <MediaPlayer options={videojsOptions} title={lecture.title}/>
                {/* <button onClick={()=> setPlay(false)}>Back</button> */}
            </div>}
        </div>
    )
}

export default Lecturecard