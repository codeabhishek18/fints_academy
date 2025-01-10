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
        <Link href={`/courses/${course.id}`} key={course._id} className='space-y-2 bg-black border border-gray-800 rounded-xl p-4'>
        <div className='relative h-40'>
          <Image className='rounded w-[100%] object-cover' src={course.imageURL} layout='fill' alt={course.title}/>
        </div>
        
        <h1 className='font-semibold'>{course.title}</h1>
        <span className='bg-gray-400 text-black text-xs py-0.5 px-2 rounded-xl'>{course.level}</span>
        <div className='flex items-center gap-2'>
        <p>${course.offerPrice}</p>
        <p className='line-through text-xs'>${course.price}</p>
        </div>
      </Link>
    )
}

export default CourseCard