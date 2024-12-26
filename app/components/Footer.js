
import email from '@/assets/email.png'
import linkedin from '@/assets/linkedin.png'
import instagram from '@/assets/instagram.png'
import logo from '@/assets/logo.png'
import youtube from '@/assets/youtube.png'
import Image from 'next/image'

const Footer = () =>
{

    return(
        <div className='flex px-[10vw] gap-6 flex-col justify-center py-24 text-white md:text-base text-sm' style={{backgroundColor: 'var(--primary-color)'}}>
            <div className='flex flex-col items-center sm:flex-row gap-2 sm:justify-between mb-6'>
                <Image className='h-12 w-fit' src={logo} alt='icon'/>
                
                <div className='flex gap-2 items-center'>
                    <Image className='h-10 w-fit' src={email} alt='icon'/>
                    <p>admin@fintsacademy.com</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 py-12' style={{borderTop: '2px solid var(--primary-bg)'}}>
            <div className='flex gap-2 items-center'>
                <a href='https://www.linkedin.com/in/lokesh-naik-amltrustedsource/' target='_blank'>
                    <Image className='h-10 w-fit' src={linkedin} alt='linkedin'/>
                </a>
                <a href='https://www.youtube.com/@camsbuild_lokesh' target='_blank'>
                    <Image className='h-10 w-fit' src={youtube} alt='youtube'/>
                </a>   
            </div>
            <p className='text-center text-gray-400'>© 2024 FinCrime Compliance Education & Consultancy. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
