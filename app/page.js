'use client'

import { useEffect, useState } from 'react'
import { faqData } from '@/utility/faqData'
import chat from '@/assets/chat.png'
import close from '@/assets/close.png'
import timeline from '@/assets/timeline.jpg'
import live from '@/assets/live.png'
import material from '@/assets/material.png'
import record from '@/assets/record.png'
import mock from '@/assets/mock.png'
import discussion from '@/assets/discussion.png'
import placement from '@/assets/placement.png'

import profile1 from '@/assets/profile1.jpeg'
import profile2 from '@/assets/profile2.jpg'
import profile3 from '@/assets/profile1.jpeg'

import globe from '@/assets/globe.png'
import growth from '@/assets/growth.png'
import industry from '@/assets/industry.png'
import skill from '@/assets/skill.png'
import Image from 'next/image'
import HeroSection from './components/Herosection'
import Accordian from './components/Accordian'
import Footer from './components/Footer'
import Query from './components/Query'
import Marquee from '@/components/ui/marquee'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const heroData =
[
    {
        id: 1,
        image: live,
        header: 'Live Classes',
        detail: 'Engage with live, interactive sessions led by industry experts.'
    },
    {
        id: 2,
        image: material,
        header: 'Curated Study Materials',
        detail: 'Detailed notes, summaries, and cheat sheets for quick revision'
    },
    {
        id: 3,
        image: record,
        header: 'Recorded Sessions',
        detail: 'Recorded sessions for you to review anytime, anywhere.'
    },
    {
        id: 4,
        image: mock,
        header: 'Mock Tests',
        detail: 'Test your knowledge with our carefully designed mock exams..'
    },
    {
        id: 5,
        image: discussion,
        header: 'Forum',
        detail: 'Ask questions and collaborate with peers preparing for the same exams'
    },
    {
        id: 6,
        image: placement,
        header: 'Placement Assistance',
        detail: 'Access to job openings through our curated job portal'
    }
]

const opportunities =
[
    {
        id: 1,
        header: 'Global Demand',
        image: globe
    },
    {
        id: 2,
        header: 'Career Growth',
        image: growth
    },
    {
        id: 3,
        header: 'Industry Adoption',
        image: industry
    },
    {
        id: 4,
        header: 'Skill Confidence',
        image: skill
    }
]

const numbers =
[
    {
        id: 1,
        title: 'Courses',
        number: '2'
    },
    {
        id: 2,
        title: 'Batches',
        number: '150+'
    },
    {
        id: 3,
        title: 'Success Stories',
        number: '1000+'
    },
]

const feedbacks = [
    {
      name: "John Doe",
      image: profile1,
      feedback: "The training program was highly informative and well-structured. The mock tests and curated materials made exam preparation much easier. The instructors were knowledgeable and provided excellent support throughout. Highly recommended for CAMS and CGSS aspirants!",
    },
    {
      name: "Jane Smith",
      image: profile2,
      feedback: "I found the live sessions and interactive discussions extremely helpful. The real-world examples and case studies made the concepts easy to understand. The forum and chat support were great for clarifying doubts quickly. This program is a complete package!",
    },
    {
      name: "Sam Wilson",
      image: profile3,
      feedback: "The flexibility of accessing recordings and curated materials at my own pace was a game-changer. The detailed curriculum covered every topic needed for the certifications. The mock tests helped me identify areas for improvement. Overall, a fantastic learning experience!",
    },
    {
      name: "John Doe",
      image: profile1,
      feedback: "The training program was highly informative and well-structured. The mock tests and curated materials made exam preparation much easier. The instructors were knowledgeable and provided excellent support throughout. Highly recommended for CAMS and CGSS aspirants!",
    },
    {
      name: "Jane Smith",
      image: profile2,
      feedback: "I found the live sessions and interactive discussions extremely helpful. The real-world examples and case studies made the concepts easy to understand. The forum and chat support were great for clarifying doubts quickly. This program is a complete package!",
    },
    {
      name: "Sam Wilson",
      image: profile3,
      feedback: "The flexibility of accessing recordings and curated materials at my own pace was a game-changer. The detailed curriculum covered every topic needed for the certifications. The mock tests helped me identify areas for improvement. Overall, a fantastic learning experience!",
    },
    {
      name: "John Doe",
      image: profile1,
      feedback: "The training program was highly informative and well-structured. The mock tests and curated materials made exam preparation much easier. The instructors were knowledgeable and provided excellent support throughout. Highly recommended for CAMS and CGSS aspirants!",
    },
    {
      name: "Jane Smith",
      image: profile2,
      feedback: "I found the live sessions and interactive discussions extremely helpful. The real-world examples and case studies made the concepts easy to understand. The forum and chat support were great for clarifying doubts quickly. This program is a complete package!",
    },
    {
      name: "Sam Wilson",
      image: profile3,
      feedback: "The flexibility of accessing recordings and curated materials at my own pace was a game-changer. The detailed curriculum covered every topic needed for the certifications. The mock tests helped me identify areas for improvement. Overall, a fantastic learning experience!",
    },
  ];

  const info =
  [
    {
      reason: "Increasing regulatory scrutiny demands professionals skilled in AML and sanctions compliance."
    },
    {
      reason: "Certifications open high-paying career opportunities in compliance and risk management."
    },
    {
      reason: "They provide tools to identify and prevent financial crimes like money laundering and fraud."
    },
    {
      reason: "Keep professionals updated with evolving financial crime techniques and sanctions frameworks."
    },
    {
      reason: "CAMS and CGSS are globally recognized, enhancing professional credibility."
    },
    {
      reason: "Help organizations avoid fines, sanctions, and reputational damage by ensuring compliance."
    },
    {
      reason: "Build expertise in assessing and mitigating financial and sanctions-related risks."
    },
    {
      reason: "Demonstrate commitment to compliance and readiness for specialized challenges."
    }
  ]
  

const Home = () =>
{
    const [ showFaq, setShowFaq ] = useState(0);

    return(
        <div className='md:text-base text-sm md:leading-9 leading-8'>
            <HeroSection />
            
            <div className='bg-white flex flex-col gap-6 items-center pb-12'>
                <h1 className='text-center font-bold lg:text-5xl sm:text-3xl text-2xl mt-[20vh]' style={{color: 'var(--primary-color)'}}>Recent Graduates</h1>
                <Marquee className="justify-center overflow-hidden [--duration:60s] [--gap:2rem] w-[100%]">
                {feedbacks.map((data, index)=>
                (
                    <div className='transition-all flex flex-col items-center p-2 rounded' key={index}>
                        <Image className='lg:h-60 md:h-48 h-24 w-fit aspect-square object-cover rounded-full' src={data.image} alt='feedback'/>
                        <h1 className='lg:text-xl text-md font-bold mt-2'>{data.name}</h1>
                        <p className='lg:text-md text-sm text-gray-400'>India</p>
                    </div>
                ))}
                </Marquee>
            </div>

            <div className='lg:px-[10vw] px-[5vw] text-white relative py-12 flex flex-col gap-4' style={{backgroundColor: 'var(--primary-color)'}}>            
                <h1 style={{color:'var(--action-color)'}} className='font-bold lg:text-5xl sm:text-3xl text-2xl'>Why CAMS and CGSS ?</h1>
                <div className='flex lg:flex-row flex-col gap-6 lg:justify-between items-center mt-4'>
                    <div className='mt-4 flex flex-col gap-2'>
                    {info.map((point, index)=>
                    (
                        <div className='flex gap-4 lg:items-center items-start' key={index}>
                            <span className='lg:p-1.5 p-1 lg:mt-0 mt-3 h-fit rounded-full' style={{backgroundColor: 'var(--action-color)'}}></span>
                            <p>{point.reason}</p>
                        </div>
                    ))}
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2'>
                    {opportunities.map((data)=>
                    (
                        <Card key={data.header} className='flex flex-col gap-2 p-4 justify-center items-center rounded'>
                            <Image className='md:h-12 h-8 w-fit' src={data.image} alt='icon'/>
                            <p className='font-semibold text-center leading-6 md:text-base text-sm text-black'>{data.header}</p>
                        </Card>
                    ))}
                    </div>
                </div>
            </div>

            <div className='lg:px-[10vw] space-y-8 px-[5vw] bg-white py-12'>
            <h1 className='font-bold w-full text-left lg:text-5xl sm:text-3xl text-2xl' style={{color: 'var(--primary-bg)'}}>About Us</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {heroData.map((data, index)=>
                (
                    <Card className='flex flex-col gap-2 p-8' key={data.id}>
                        <Image className='lg:h-14 h-10 w-fit text-sm md:text-base' src={data.image} alt='icon'/>
                        <h1 className='md:text-lg text-base font-bold mt-4'>{data.header}</h1>
                        <p>{data.detail}</p>
                    </Card>
                ))}
                </div>    
                <div className='w-[100%] flex flex-col gap-8 rounded-xl lg:p-12 md:p-8 p-4 bg-white shadow-md' style={{backgroundColor: 'var(--primary-color)'}}>
                <div className='grid grid-cols-3 lg:gap-6 md:gap-4 gap-2'>
                {numbers.map((data)=>
                (
                    <div className='flex flex-col items-center gap-2' key={data.id}>
                        <h1 className='font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl' style={{color: 'var(--action-color)'}}>{data.number}</h1>
                        <p className='lg:text-xl md:text-lg text-xs text-white'>{data.title}</p>
                    </div>
                ))}
                </div>
                {/* <p className='font-bold text-4xl text-center' style={{color: 'var(--action-color)'}}>Join us to achieve more</p> */}
                </div>
                
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'  style={{backgroundColor: 'var(--primary-color)'}}>
                <h1 className='px-[5vw] lg:px-[10vw] font-bold lg:text-5xl sm:text-3xl text-2xl py-12' style={{color: 'var(--action-color)'}}>Roadmap</h1>
                <Image src={timeline} alt='timeline'/>
            </div>

            {/* <div className='lg:px-[10vw] px-[5vw] bg-white flex flex-col py-12'>
                <h1 className='font-bold w-full text-left mb-8 lg:text-5xl sm:text-3xl text-2xl' style={{color: 'var(--primary-bg)'}}>Testimonials</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {feedbacks.map((feed, index)=>
                (
                    <div key={index} className='shadow-md bg-gray-100 p-6 rounded flex flex-col gap-2 hover:shadow-xl'>
                        <Image className='lg:h-14 md:h-10 text-sm md:text-base w-fit object-cover rounded-full' src={feed.image} alt='user'/>
                        <h1 className='font-bold text-xl'>{feed.name}</h1>
                        <p>{feed.feedback}</p>
                    </div>
                ))}
                </div>
            </div> */}

            <div className='sm:px-[10vw] px-[15vw] py-12'>
            <h1 className='font-bold w-full text-left mb-8 lg:text-5xl sm:text-3xl text-2xl' style={{color: 'var(--primary-bg)'}}>Testimonials</h1>
            <Carousel >
      <CarouselContent>
        {feedbacks.map((feed, index) => (
          <CarouselItem key={index} className='lg:basis-1/2'>
              <Card>
                <CardContent className="flex flex-col items-start gap-4 justify-center md:p-6 p-4">
                        <Image className='h-14 text-sm md:text-base aspect-square w-fit object-cover rounded-full' src={feed.image} alt='user'/>
                        <h1 className='font-bold md:text-xl text-lg'>{feed.name}</h1>
                        <p>{feed.feedback}</p>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
            </div>

            <div className='lg:px-[10vw] px-[5vw] py-12 flex flex-col gap-6' style={{backgroundColor: 'var(--primary-color)'}}>
                <p className='font-bold lg:text-5xl sm:text-3xl text-2xl mb-4' style={{color: 'var(--action-color)'}}>FAQs</p>
                <div className='flex flex-col gap-8'>
                {faqData.map((data, index)=>
                (
                    <Accordian data={data} key={data.id} index={index} showFaq={showFaq} setShowFaq={setShowFaq}/>
                ))}
                </div>
            </div>

            {/* <div className='lg:px-[10vw] space-y-8 px-[5vw] flex items-center justify-between bg-white py-12'>
                <p className='text-gray-400 text-xl'>Heard us enough?</p>
                <h1 className='font-bold text-5xl' style={{color: 'var(--primary-color)'}}>Contact Us</h1>
            </div>
             */}

            <div style={{backgroundColor: 'var(--primary-color)'}}>
            <Drawer className='px-[5vw]'>
                <DrawerTrigger>
                <Image className='fixed right-8 bottom-8 md:h-14 h-12 w-fit p-3 rounded-full cursor-pointer' src={chat} alt='query' style={{backgroundColor: 'var(--primary-color)'}}/>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className='flex flex-col items-start gap-4'>
                        <DrawerTitle className='mb-2 lg:text-2xl md:text-xl text-lg'>Drop your query, so that we get back to you ASAP!</DrawerTitle>
                        
                        <Label htmlFor="email">Full Name</Label>
                        <Input className='lg:h-14 md:h-10 text-sm md:text-base' type="email" placeholder="Full Name" />
                
                        <Label htmlFor="email">Email</Label>
                        <Input className='lg:h-14 md:h-10 text-sm md:text-base' type="email" placeholder="Email" />

                        <Label htmlFor="email">Contact</Label>
                        <Input className='lg:h-14 md:h-10 text-sm md:text-base' type="email" placeholder="Contact" />

                        <Label htmlFor="email">Query</Label>
                        <Input className='lg:h-14 md:h-10 text-sm md:text-base' type="email" placeholder="Query" />
                    </DrawerHeader>
                        <Button className='lg:h-12 h-10 text-sm md:text-base w-40 ml-4 mb-4'>Submit</Button>
                </DrawerContent>
            </Drawer></div>            
            <Footer/>
        </div>
    )
}

export default Home

