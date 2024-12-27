import Image from 'next/image'
import { useRouter } from 'next/navigation'
import verified from '../../assets/verified.png'
import Link from 'next/link'
import { BorderBeam } from '@/components/ui/border-beam'
import { Card } from '@/components/ui/card'

const extraData =
[
    {
        id:1,
        description: '32 recorded lectures'
    },
    {
        id:2,
        description: '10+ mock tests'
    },
    {
        id:3,
        description: 'Exclusive study guides'
    },
    {
        id:4,
        description: 'Lifetime access to forum'
    },

]

const CourseCard = ({level, course}) =>
{

    return(
    <div className='bg-white rounded shadow-xl'>
        <Link href={level === 'admin' ? `/admin/courses/${course.id}` : `/courses/${course.id}`} className='relative text-sm md:text-base'>
            <div className='flex flex-col gap-4 p-4'>
            <div className='flex flex-col items-center justify-center h-48 rounded' style={{backgroundColor: 'var(--primary-color)'}}>
                <Image className='object-scale-down h-[70%]' src={course.imageURL} alt={course.id} width={150} height={150}/>
            </div>
            {/* {level !== 'admin' && <BorderBeam colorFrom='var(--primary-color)' colorTo='var(--action-color)' className='rounded-xl'/>} */}
            
            <p className='md:text-lg text-base font-semibold' >{course.title}</p> 
            
            {/* <p className='md:text-3xl text-2xl text-center w-full font-bold'>${course.price}</p> */}
            {level !== 'admin' && 
            <div className='flex flex-col gap-2'>
            
                {extraData.map((data)=>
                (
                    <div key={data.id} className='flex gap-2 items-center text-sm'>
                        <Image className='h-5 w-fit' src={verified} alt='icon'/>
                        <p>{data.description}</p>
                    </div>
                ))}
                <p className='text-gray-400 mt-2 text-sm'>32 lectures, 64 hours</p>
            </div>}
            </div>
        </Link>
    </div>
    )
}

export default CourseCard