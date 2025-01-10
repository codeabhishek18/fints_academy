
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { FormatDate } from '@/utility/FormatDate';
import deleteIcon from '@/assets/delete.png'
import axios from 'axios';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

const BatchCard = ({type, level, batch, participants, removeBatch, batchId, enrollment}) =>
{
    const router = useRouter();
    const pathname = usePathname();

    const deleteBatch = async () =>
    {
        try
        {
            const url = `/api/batch/${data._id}`
            await axios.delete(url)
        }
        catch(error)
        {
            toast(error)
        }
    }

    const checkAccess = () =>
    {
        if(data.access === 'true')
            return router.push(`/course/${data.course.id}?batchId=${data.title}`)
        else
            toast('Access Denied')
    }

    return(
        <Link className='p-4 rounded-md flex flex-col gap-4 border border-gray-800 bg-black text-white text-sm relative shadow-lg' href={level === 'admin' ? (type === 'batch' ? `/admin/batches/${batch.title}` : `${pathname}/${batchId}`) : `/course/${batch.course.id}?enrollmentId=${enrollment._id}`}>
            
            <div className='rounded flex h-40 flex-col p-4 justify-center items-center shadow-md relative'>
                <Image className='rounded' src={batch.course.imageURL} alt={batch.title} layout='fill'/>
                <p className='text-xl font-semibold text-gray-100'>{batch.title.split('-')[1]}</p>
            </div>
            
            {/* {level === 'admin' && type === 'batch' && <Image className='h-5 w-5 absolute top-8 right-8 cursor-pointer' src={deleteIcon} alt='delete' onClick={deleteBatch}/>} */}
            {level !== "admin" && <p className='font-semibold text-base'>{batch.course.title}</p>}
            <p className='absolute top-6 right-6 bg-gray-600 p-1 rounded text-xs '>{FormatDate(batch.startDate)}</p>
            <div className='flex justify-between items-end text-gray-400'>
                {level === "admin" ? (type === 'batch' ? <p> Enrollments : {batch.enrollments.length}</p> : <p> Participants : {participants}</p>) : <p>{batch.sessions.length} lectures</p>}
                <p>{batch.status}</p>
            </div> 
        </Link>
    )
}

export default BatchCard