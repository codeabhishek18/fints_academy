'use client'

import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';
import upArrow from '@/assets/show.png'
import downArrow from '@/assets/drop.png'
import { toast } from 'sonner';
import { Input } from "@/components/ui/input";
import ReplyCard from './ReplyCard';
import { Button } from '@/components/ui/button';

const Comment = ({comment, getDiscussions, user}) =>
{
    const [ reply, setReply ] = useState('')
    const [ viewReply, setViewReply ] = useState(null)
    const [ showReply, setShowReply ] = useState(null);

    const handleReply = async (id) =>
    {
        try
        {
            if(!reply)
                return toast.error('Reply cannot be empty')

            if(user)
            {
                const url = `/api/reply/${id}`
                const response = await axios.post(url, {reply, author: user})
                toast.success(response.data.message)
                getDiscussions('/api/forum');
                setReply('');
                setViewReply(id)
            }
            
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return(
        <div className='space-y-2'>
            <ReplyCard key={comment._id} data={comment} 
                type="comment" setShowReply={setShowReply} 
                replyId={comment._id}
            />

            {(comment.replies?.length > 0 ? 
            <div 
                onClick={()=>
                { 
                    setViewReply((prev)=> prev === comment._id ? null : comment._id); 
                    setShowReply((prev)=> prev === comment._id ? null : comment._id)
                }}>
                <Image src={viewReply === comment._id ? downArrow : upArrow} alt='comments'/>{comment.replies?.length} {comment.replies?.length > 1 ? 'replies' : 'reply'}</div> : <></>)}

            {viewReply === comment._id &&
            <div className=''>
                {comment.replies.map((reply) =>
                (
                    <ReplyCard key={reply._id} data={reply} type="reply"/>
                ))}
            </div> }
            
            
            {showReply === comment._id && 
            <div className='w-[60%]  flex gap-2 ml-14'> 
                <Input value={reply} onChange={(e)=> setReply(e.target.value)}/>
                <Button className='' onClick={()=> handleReply(comment._id)}>Send</Button>
            </div>}
        </div>   
    )
}

export default Comment