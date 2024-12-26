'use client'

import styles from './styles.module.css'  
import axios from "axios";
import { useSession } from "next-auth/react"
import Image from 'next/image';
import { useParams, usebatchId, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { toast } from 'sonner';
import Link from 'next/link';
import Loading from '@/app/components/Loading';

export const pendingSessions = (sessions) =>
{
    return sessions.filter((session) => session.status === 'Upcoming').length
}

export const recordings = (sessions) =>
{
    const count = sessions.filter((session) => session.status === 'Completed').length
    return count === 0 ? 'NA' : count
}

const Page = () =>
{
    return(
        <Suspense fallback={<Loading/>}>
            <Batch/>
        </Suspense>
    )
}

const Batch = () =>
{
    // const { batchId } = useParams();
    const { data, status } = useSession();
    const [ batchData, setBatchData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true)
    const [ activeAgenda, setActiveAgenda ] = useState(-1);
    const [ enrollment, setEnrollment ] = useState(null);
    const params = useSearchParams();
    const batchId = params.get('batchId');
    const router = useRouter();
    
    const getBatchData = async () =>
    {
        try
        {
            const url = `/api/batch/${batchId}`
            const response = await axios.get(url);
            if(response.data.access === 'false')
            {
                router.push('/dashboard')
                toast('Access Denied')
            }
            setBatchData(response.data)
            checkfeedback(response.data)
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const checkfeedback = (batch) =>
    { 
        const response = batch.course.feedbacks.find((feed) => feed.user === data.user.id);
        if(response)
            setHideFeedback(false);
    }
    
    const getAsssessments = async () =>
    {
        try
        {
            const url = `/api/user/${data.user.id}`
            const response = await axios.get(url);
            const batchEnrollment = response.data.enrollments.find((enrollment) => enrollment.batch.title === batchId);
            setEnrollment(batchEnrollment);
            setIsLoading(false);
        }
        catch(error)
        {
            toast.error(error.message)
        }
    }
    
    useEffect(() => 
    {
        if(status === "authenticated")
        {
            getBatchData();
            getAsssessments();
        }
        else if(status === "unauthenticated")
            router.push('/')
        else
            setIsLoading(true);
            
    }, [status]);

    if(status === 'loading' || isLoading)
    return(
        <Loading/>   
    )

    return(
        <div onClick={()=> setActiveAgenda(-1)} className={styles.wrapper}>

            {batchData &&
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                <div className='rounded p-4 flex flex-col gap-2 items-center justify-center min-h-48' style={{backgroundColor: 'var(--primary-color)'}}>
                    <Image className='h-32 w-fit' src={batchData.course.imageURL} alt={batchData.title} width={100} height={100}/>
                </div>
                <div className='rounded p-4 flex flex-col gap-2 items-center justify-center min-h-48' style={{backgroundColor: 'var(--primary-color)'}}>
                    <p className='' style={{color: 'var(--action-color)'}}>Batch</p>
                    <p className={styles.title}>{batchData.title.split('-')[1]}</p>
                </div>
                <div className='rounded p-4 flex flex-col gap-2 items-center justify-center min-h-48' style={{backgroundColor: 'var(--primary-color)'}}>
                    <p className='' style={{color: 'var(--action-color)'}}>Progress</p>
                    <p className={styles.title}>{Math.ceil((batchData.sessions.length - pendingSessions(batchData.sessions))*100/batchData.sessions.length)}%</p>
                </div>
                <div className='rounded p-4 flex flex-col gap-2 items-center justify-center min-h-48' style={{backgroundColor: 'var(--primary-color)'}}>
                    
                    <p className='' style={{color: 'var(--action-color)'}}>Sessions</p>
                    <p className={styles.title}>32</p>
                    <div className={styles.pop}>
                        <Link href={`${batchId}/sessions`} className={styles.route}>View</Link>
                    </div>
                </div>

                <div className='rounded p-4 flex flex-col gap-2 items-center justify-center min-h-48' style={{backgroundColor: 'var(--primary-color)'}}>
                    <p className='' style={{color: 'var(--action-color)'}}>Recordings</p>
                    <p className={styles.title}>{enrollment.access === 'false' || enrollment.batch.access === 'false' ? 'NA' : recordings(batchData.sessions)}</p>
                    {(enrollment.access === 'true' && recordings(batchData.sessions) !== 'NA') && 
                    <div className={styles.pop}>
                        <Link href={`${batchId}/recordings`} className={styles.route}>View</Link>
                    </div>}
                </div>
                <div className='rounded p-4 flex flex-col gap-2 items-center justify-center min-h-48' style={{backgroundColor: 'var(--primary-color)'}}>
                    <p className='' style={{color: 'var(--action-color)'}}>Assessments</p>
                    <p className={styles.title}>{enrollment.assessments?.length === 0 ? 'NA' : enrollment.assessments.length}</p>
                    {enrollment.assessments?.length > 0 && 
                    <div className={styles.pop}>
                        <Link href={`${batchId}/assessments`} className={styles.route}>View</Link>
                    </div>}
                </div>
                <div className='rounded p-4 flex flex-col gap-2 items-center justify-center min-h-48' style={{backgroundColor: 'var(--primary-color)'}}>
                    <p className='' style={{color: 'var(--action-color)'}}>Zoom</p>
                    <div className={styles.pop}>
                        <Link href={batchData.zoomLink ? batchData.zoomLink : ''} className={styles.route}>Connect</Link>
                    </div>
                </div>
                <div className='rounded p-4 flex flex-col gap-2 items-center justify-center min-h-48' style={{backgroundColor: 'var(--primary-color)'}}>
                    <p className='' style={{color: 'var(--action-color)'}}>Whatsapp</p>
                    
                    <div className={styles.pop}>
                    <Link href='' className={styles.route}>Connect</Link>
                    </div>
                </div>
                <div className='rounded p-4 flex flex-col gap-2 items-center justify-center min-h-48' style={{backgroundColor: 'var(--primary-color)'}}>
                    <p className='' style={{color: 'var(--action-color)'}}>Forum</p>
                    
                    <div className={styles.pop}>
                    <Link href='/forum' className={styles.route}>Connect</Link>
                    </div>
                </div>
            </div>}

        
            {/* {batchData &&
            <div className={styles.container} >
                <div className={styles.progress}>
                    <Progress batchData={batchData} level='user' enrollment={enrollment}/>
                </div>

                <div className={styles.practicals}>
                    {enrollment.access === 'true' &&
                    <div className={styles.sessions}>
                        {batchData.sessions.map((session, index)=>
                        (
                            <div className={styles.sessions}>
                                <SessionCard session={session} index={index} setActiveAgenda={setActiveAgenda} activeAgenda={activeAgenda} level='user' key={data._id}/>
                                {session.status === 'Completed' && 
                                <Lecturecard lecture={session} level='admin' type='dashboard'/>}
                            </div>
                        ))}
                    </div>}
                </div>
            </div>} */}

            {/* <div className={styles.assessmentWrapper}>
                {enrollment.enrollment.length > 0 && <p className='' style={{color: 'var(--action-color)'}}>enrollment</p>}
                <div className={styles.enrollment}>
                    {enrollment?.enrollment?.map((assessment, index)=>
                    (
                        <AssessmentCard assessment={assessment} index={index} key={data._id} batchId={batchId}/>
                    )
                )}
            </div>
            </div> */}

            {/* {hideFeedback && <Image className={styles.feedback} alt='feedback' onClick={()=> setFeedbackForm(true)} onMouseEnter={()=> setFeedbackTooltip(true)} onMouseLeave={()=> setFeedbackTooltip(false)}/>}
            {feedbackTooltip && <p className={styles.toolTip}>Feedback</p>}
            {feedbackForm && 
            <div className={styles.feedbackForm}>
                <Feedback setFeedbackForm={setFeedbackForm} courseId={batchData.course._id}/>
            </div>} */}
        </div>
    )
}

export default Page