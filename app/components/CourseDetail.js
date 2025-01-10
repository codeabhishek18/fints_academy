'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Lecturecard from './LectureCard'
import { Button } from '@/components/ui/button'

export const details =
[
    {
        id: 1,
        header: 11,
        detail: 'Weeks'
    },
    {
        id: 2,
        header: 32,
        detail: 'Sessions'
    },
    {
        id: 3,
        header: 16,
        detail: 'Learning Sessions'
    },
    {
        id: 4,
        header: 16,
        detail: 'Practice Sessions'
    }
]

const CourseDetail = ({course, level}) =>
{
    const router = useRouter();

    const handleClick = () =>
    {
        localStorage.setItem('selectedCourse', course.id)
        router.push('/cart')
    }

    return (
        <div className='flex lg:flex-row flex-col gap-8 text-white'>
            <div className='md:h-[70vh] lg:sticky lg:top-32 lg:w-[40%] w-full h-48 rounded flex items-center justify-center shadow-lg relative' style={{backgroundColor: ' var(--primary-color)'}}>
                <Image className='h-[50%] w-fit rounded-xl object-cover' src={course.imageURL} alt={course.title} layout='fill'/>
            </div>
            <div className='lg:w-[60%] w-full space-y-4 text-sm'>
            <p className='md:text-3xl text-2xl font-bold text-green-300'>{course.title}</p>
            <p className='bg-white text-black shadow-md w-fit rounded-xl px-2 py-1'>{course.level}</p>
            <p className='leading-8 text-gray-300'>{course.description}</p>
            {/* <h1 className='md:text-xl text-lg font-semibold'>Modules in brief</h1> */}
            <div className='grid grid-cols-1 gap-2 '>
            {course.lectures.map((lecture)=>
            (
                <Lecturecard lecture={lecture} level={level} key={lecture._id}/>  
            ))}
            </div>
            {/* {level === 'visitor' && <Button onClick={handleClick} className='w-fit md:h-12 h-10 text-sm md:text-base font-semibold'>Join Now</Button>} */}
            </div>
        </div>
    )
}

export default CourseDetail