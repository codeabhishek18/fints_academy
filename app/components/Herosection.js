'use client'

import gift from '@/assets/gift.png'
import subheading from '@/assets/subheading.png'
import Image from 'next/image'
import Navbar from './Navbar'
import Link from 'next/link'

const HeroSection = () =>
{

    return(
        <div className='h-[80vh] flex flex-col justify-center items-center relative'>
            <Navbar/>
            <Image className='object-cover h-[100%]' src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply' alt='FINTS AML' layout='fill' priority={true} />

                <div className='h-[100%] lg:px-[10vw] px-[5vw] relative flex flex-col justify-center gap-8 items-center'>
                    <p className='lg:text-5xl font-bold text-3xl text-wrap text-center leading-10 text-white whitespace-nowrap'>Fast-Track Your <span style={{color: 'var(--action-color)'}}>CAMS</span> & <span style={{color: 'var(--action-color)'}}>CGSS</span> Journey Today</p>
                    <Image className='lg:h-20 md:h-16 h-12 w-fit' src={subheading} alt='icon'/>
                    {/* <p className='text-white text-base md:text-xl'>Unlock your potential now!</p> */}
                    {/* <Link className={styles.enroll} href={status  === 'authenticated' ? '/dashboard' : '/courses'}>Get Started</Link> */}
                </div>
            
            <div className='w-[90%] flex items-center justify-between rounded-xl lg:p-12 p-6 absolute bottom-[-10vh] lg:bottom-[-15vh] bg-white shadow-md' style={{backgroundColor: 'var(--action-color)'}}>
                <div className='flex flex-col lg:gap-4 gap-2'>
                    <p className='font-bold lg:text-2xl md:text-xl text-base text-white'>All courses at 20% off</p>
                    <h1 className='lg:text-5xl font-bold text-3xl text-wrap text-center leading-loose' style={{color: 'var(--primary-color)'}}>New Year Sale</h1>
                    <Link href='/courses' className='w-fit bg-white lg:p-2 p-1 text-sm lg:text-base rounded font-bold hover:shadow-lg'>Explore</Link>
                </div>
                <Image className='lg:h-16  md:h-10 h-8 w-fit' src={gift} alt='offer' priority={true} />
            </div>
        </div>
    )
}

export default HeroSection