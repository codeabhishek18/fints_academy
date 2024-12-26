
import user from '@//assets/user.png'
import Image from 'next/image'
import { FormatTime } from '@/utility/formatTime'

const ReplyCard = ({data, type, setShowReply, replyId}) =>
{

    return(
        <div className='flex items-start gap-4 text-sm'>
            <Image className='h-10 w-fit' src={user} alt='img'/>
            <div className='space-y-0.5'>
                <p className='font-semibold'>{data?.author?.name}</p>
                <p >{type === "comment" ? data.comment : data.reply}</p>
                <div className='flex gap-2 text-sm text-gray-400'>
                    {type === "comment" && <p className='cursor-pointer' onClick={()=> setShowReply(replyId)}>reply</p>}
                    {type === "comment" && <p>•</p>}
                    <p>{FormatTime(data.createdAt)}</p>
                </div>
            </div>
            {/* <p className={.like}>{data.like}</p> */}
        </div>
    )
}

export default ReplyCard