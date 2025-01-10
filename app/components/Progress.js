import Image from 'next/image';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import more from '@/assets/more.png'
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import ProgressBar from './ProgressBar';

const options = { year: 'numeric', month: 'long', day: 'numeric' };
export const pendingSessions = (sessions) =>
{
    return sessions.filter((session) => session.status === 'Upcoming').length
}

const Progress = ({batch, level, assessments, getBatch}) =>
{
    const [ whatsapplink, setWhatsapplink ] = useState('');
    const [ zoomLink, setZoomLink ] = useState('');
    const [ showwlink, setShowWlink ] = useState(false);
    const [ showzlink, setShowZlink ] = useState(false);
    const [ showAccess, setShowAccess ] = useState(false);
    const router = useRouter();
    const { data } = useSession();
    
    const addWhatsappLink = async () =>
    {
        const url = `/api/links/whatsapp/${batch._id}`
        await axios.post(url, {link : whatsapplink})
        setShowWlink(false)
        setWhatsapplink('');
    }

    const addZoomLink = async () =>
    {
        try
        {
            const url = `/api/links/zoom/${batch._id}`
            const response = await axios.post(url, {link : zoomLink})
            toast.success(response.data.message);
            setShowZlink(false)
            setZoomLink('');
        }
        catch(error)
        {
            toast.error(error.message);
        }
    }

    const handleBatchAccess = async () =>
    {
        try
        {
            const grant = batch.access === 'true' ? 'false' : 'true'
            const url =  `/api/batch/${batch._id}`
            const response = await axios.put(url, {access: grant})
            toast(response.data.message || response.data.error);
            getBatch();
        }
        catch(error)
        {
            toast(error.message)
        }
    }

    return(
        <div className='space-y-4'>
            {/* <div className='flex flex-col h-[40vh] text-sm md:text-base justify-center items-center rounded p-6 relative'>
                <Image className='object-cover rounded' src={batch.course.imageURL} alt={batch.course.title} layout='fill'/>
                <div className='text-3xl font-bold mb-2'>{batch.title.split('-')[1]}</div>
                <p className='absolute top-2 right-2 text-sm bg-gray-600 p-1 rounded'>{new Date(batch.startDate).toLocaleDateString('en-US', options)} - {new Date(batch.endDate).toLocaleDateString('en-US', options)}</p>
            </div> */}
            <ProgressBar batch={batch}/>
            {/* <div className='text-white border border-gray-800 rounded-xl p-4 space-y-2'>
                <div className='flex justify-between items-center'>
                    <span>Sprint code</span>
                    <span>{batch.title}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Sprint mentor</span>
                    <span>{batch.mentor.name}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Completion</span>
                    <span>{Math.ceil((batch.sessions?.length - pendingSessions(batch.sessions))*100/batch.sessions.length)}%</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span>Whatsapp group</span>
                    {level === "user" ? <Link href={`${batch?.whatsappLink}`} target='_blank'>Connect</Link> :
                    <button onClick={()=> setShowWlink(true)}>Add link</button>}
                </div>
               {showwlink && <div className={styles.addlink}>
                    <input placeholder='add whatsapp link' value={whatsapplink} onChange={(e)=> setWhatsapplink(e.target.value)}/>
                    <button onClick={addWhatsappLink}>Add</button>
                </div>}
                <div className='flex justify-between items-center'>
                    <span>Zoom link</span>
                    {level === "user" ? <Link href={`${batch?.zoomLink}`} target='_blank'>Connect</Link> :
                    <button onClick={()=> setShowZlink(true)}>Add link</button>}  
                </div>
                {showzlink && <div className={styles.addlink}>
                    <input placeholder='add zoom link' value={zoomLink} onChange={(e)=> setZoomLink(e.target.value)}/>
                    <button onClick={addZoomLink}>Add</button>
                </div>}
            </div> */}
           {/* {showAccess && <button onClick={handleBatchAccess}>{batch.access ==='true' ? 'Revoke Batch Acess' : 'Grant Batch Access'}</button>}
            
           {level === 'admin' && <p>{batch.access ===  'true' ? 'Accessible' : 'Restricted'}</p>} */}
         </div>
    )
}

export default Progress