
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

const BatchCard = ({type, level, data, participants, removeBatch, batchId}) =>
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
        <Link href={level === 'admin' ? (type === 'batch' ? `/admin/batches/${data.title}` : `${pathname}/${batchId}`) : `/course/${data.course.id}?batchId=${data.title}`}>
            <Card className='p-4 rounded flex flex-col gap-4 relative'>
            <div className='rounded flex flex-col p-4 justify-center items-center shadow-md' style={{backgroundColor: 'var(--primary-color)'}}>
                <Image src={data.course.imageURL} alt={data.title} height={150} width={150}/>
                <p className='text-2xl font-semibold text-gray-100'>{data.title.split('-')[1]}</p>
            </div>
            
            {/* {level === 'admin' && type === 'batch' && <Image className='h-5 w-5 absolute top-8 right-8 cursor-pointer' src={deleteIcon} alt='delete' onClick={deleteBatch}/>} */}
            {level !== "admin" && <p className='font-semibold'>{data.course.title}</p>}
            <p className='absolute top-8 left-8 bg-gray-300 p-1 rounded text-xs '>{FormatDate(data.startDate)}</p>
            <div className='flex justify-between items-end'>
                {level === "admin" ? (type === 'batch' ? <p> Enrollments : {data.enrollments.length}</p> : <p> Participants : {participants}</p>) : <p>{data.sessions.length} lectures</p>}
                <p>{data.status}</p>
            </div> 
        </Card>
        </Link>
    )
}

export default BatchCard