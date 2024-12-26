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
    const router = useRouter();

    return(
    <Card>
        
        <Link href={`/courses/${course.id}`} className='relative text-sm md:text-base'>
            <div className='flex flex-col gap-4 p-5'>
            <div className='flex flex-col items-center justify-center h-48 rounded-xl' style={{backgroundColor: 'var(--primary-color)'}}>
                <Image className='object-scale-down' src={course.imageURL} alt={course.id} width={150} height={150}/>
            </div>
            <BorderBeam colorFrom='var(--primary-color)' colorTo='var(--action-color)' className='rounded-xl'/>
            
            <p className='md:text-xl text-lg font-bold text-center' >{course.title}</p> 
            <p className='md:text-3xl text-2xl text-center w-full font-bold'>${course.price}</p>
            <div className='flex flex-col gap-2 mt-2'>
                
                {extraData.map((data)=>
                (
                    <div key={data.id} className='flex gap-2 items-center'>
                        <Image className='h-5 w-fit' src={verified} alt='icon'/>
                        <p>{data.description}</p>
                    </div>
                ))}
                <div className='flex items-baseline gap-2'>
                    {/* <span className='text-md line-through'>${course.price}</span> */}
                </div>
                {/* <span className={styles.discount}>{Math.floor((course.price - course.offerPrice)*100/course.price)}% off</span> */}
                <div className=''>
                    <p className='text-gray-400'>32 lectures, 64 hours</p>           
                    {/* <button className={styles.explore} onClick={()=> level === 'admin' ? router.push(`/admin/courses/${course.id}`) : router.push(`/courses/${course.id}`)}>View</button>  */}
                </div>
            </div>
            </div>
        </Link>
    </Card>
    )
}

export default CourseCard