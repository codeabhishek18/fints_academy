'use client'

import { useEffect, useState } from 'react'
import { faqData } from '@/utility/faqData'
import chat from '@/assets/chat.png'
import close from '@/assets/close.png'
import call from '@/assets/call.png'
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
import compliance from '@/assets/compliance.png'
import career from '@/assets/career.png'
import goal from '@/assets/goal.png'

import organisation from '@/assets/organisation.png'
import prevention from '@/assets/prevention.png'
import risk from '@/assets/risk.png'
import updated from '@/assets/updated.png'
import success from '@/assets/success.png'

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
import RequestForm from './components/RequestForm'

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
        header: 'Referrals',
        detail: 'Benefit from job referrals and career guidance through our strong alumni network'
    }
]

const roadmap = [
  {
    weeks: "1–2",
    focus: "Build the Foundation",
    description:
      "Understand the basics of compliance, AML, and sanctions frameworks. Study key principles, terminologies, and regulatory bodies like FATF, OFAC, and EU laws.",
  },
  {
    weeks: "3–4",
    focus: "Deep Dive into Regulations and Risks",
    description:
      "Explore AML laws, sanctions compliance programs, risk assessment strategies, money laundering typologies, and sanctions evasion tactics through detailed study.",
  },
  {
    weeks: "5–6",
    focus: "Practical Application and Testing",
    description:
      "Engage in case studies, quizzes, and scenarios to apply knowledge. Practice compliance measures, risk mitigation strategies, and take initial mock tests.",
  },
  {
    weeks: "7–8",
    focus: "Revision and Final Prep",
    description:
      "Revisit key concepts, create summaries, and take final revision mock tests. Focus on exam format, time management, and solidifying weak areas.",
  },
  {
    weeks: "9–12",
    focus: "Initial Mock Tests and Analysis",
    description:
      "Take one full-length mock test per week for both CAMS and CGSS. Analyze performance, identify weak areas, and revise key topics to build confidence.",
  },
  {
    weeks: "13–16",
    focus: "Advanced Mock Tests and Refinement",
    description:
      "Take two full-length mock tests per week for each certification. Focus on high-weightage topics, refine time management, and ensure consistent performance.",
  },
];



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
      feedback: "The training program was well-structured. The mock tests and curated materials made exam preparation much easier. The instructors were knowledgeable and provided excellent support throughout. Highly recommended for CAMS and CGSS aspirants!",
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
      feedback: "The training program was well-structured. The mock tests and curated materials made exam preparation much easier. The instructors were knowledgeable and provided excellent support throughout. Highly recommended for CAMS and CGSS aspirants!",
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
      feedback: "The training program was well-structured. The mock tests and curated materials made exam preparation much easier. The instructors were knowledgeable and provided excellent support throughout. Highly recommended for CAMS and CGSS aspirants!",
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

  const whyCamsAndCgss = [
    {
      id: 1,
      icon: compliance, // Replace with actual icons or paths to images
      header: "Regulatory Compliance",
      description: "Increasing regulatory scrutiny demands professionals skilled in AML and sanctions compliance.",
    },
    {
      id: 2,
      icon: career,
      header: "Career Opportunities",
      description: "Certifications open high-paying career opportunities in compliance and risk management.",
    },
    {
      id: 3,
      icon: prevention,
      header: "Financial Crime Prevention",
      description: "They provide tools to identify and prevent financial crimes like money laundering and fraud.",
    },
    {
      id: 4,
      icon: updated,
      header: "Stay Updated",
      description: "Keep professionals updated with evolving financial crime techniques and sanctions frameworks.",
    },
    {
      id: 5,
      icon: globe,
      header: "Global Recognition",
      description: "CAMS and CGSS are globally recognized, enhancing professional credibility.",
    },
    // {
    //   id: 6,
    //   icon: organisation,
    //   header: "Organizational Compliance",
    //   description: "Help organizations avoid fines, sanctions, and reputational damage by ensuring compliance.",
    // },
    // {
    //   id: 7,
    //   icon: risk,
    //   header: "Risk Mitigation",
    //   description: "Build expertise in assessing and mitigating financial and sanctions-related risks.",
    // },
    {
      id: 8,
      icon: goal,
      header: "Professional Commitment",
      description: "Demonstrate commitment to compliance and readiness for specialized challenges.",
    },
  ];
  

const Home = () =>
{
    const [ showFaq, setShowFaq ] = useState(0);

    return(
        <div className='md:text-base text-sm md:leading-7 leading-5'>
            <HeroSection />
            
            <div className='bg-white space-y-4 text-center items-center py-12'>
            <h1 className='font-semibold text-center text-2xl'>CAMS Graduates, December</h1>
                <Marquee className="justify-center overflow-hidden [--duration:60s] [--gap:2rem] w-[100%]">
                {feedbacks.map((data, index)=>
                (
                    <div className='transition-all flex flex-col items-center p-2 rounded' key={index}>
                        <Image className='lg:h-48 md:h-36 h-24 w-fit aspect-square object-cover rounded-full' src={data.image} alt='feedback'/>
                        <h1 className='lg:text-lg text-base font-semibold mt-2'>{data.name}</h1>
                        <p className='lg:text-base text-sm text-gray-400'>India</p>
                    </div>
                ))}
                </Marquee>
                <h1 className='lg:px-[10vw] px-[5vw] lg:text-4xl md:text-2xl text-xl  leading-snug font-semibold text-orange-700'>Join Our Growing Network of Successful Graduates</h1>
                <p className='lg:px-[10vw] px-[5vw]  text-gray-400'>Explore the achievements of our recent graduates and see how our program is shaping the future of AML and compliance professionals.</p>
            </div>

            <div className='lg:px-[10vw] px-[5vw] space-y-12 text-white relative py-12 flex flex-col gap-4' style={{backgroundColor: 'var(--primary-color)'}}>            
                <h1 className='font-semibold text-center text-2xl'>Why it matters</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                    {whyCamsAndCgss.map((data, index)=>
                    (
                      <div className='space-y-4 p-8 rounded-xl shadow-2xl' key={data.id}  style={{backgroundColor: 'var(--primary-bg)'}}>
                       <Image className='lg:h-12 h-10 w-fit text-sm md:text-base' src={data.icon} alt='icon'/>
                        <h1 className='font-semibold'>{data.header}</h1>
                        <p className='text-gray-400'>{data.description}</p>
                      </div>
                    ))}
                  </div>
            </div>

            <div className='lg:px-[10vw] space-y-16 px-[5vw] bg-white py-12'>
            <h1 className='font-semibold w-full text-center text-2xl mb-8'>Course benefits</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {heroData.map((data, index)=>
                (
                    <div className='flex flex-col gap-2' key={data.id}>
                        <Image className='lg:h-12 h-10 w-fit text-sm md:text-base' src={data.image} alt='icon'/>
                        <h1 className='md:text-lg text-base font-semibold mt-4'>{data.header}</h1>
                        <p className='text-gray-400'>{data.detail}</p>
                    </div>
                ))}
                </div>    
            </div>

            <div className='lg:px-[10vw] px-[5vw] space-y-12 text-white relative py-12 flex flex-col gap-4' style={{backgroundColor: 'var(--primary-color)'}}>            
                <div className='flex lg:flex-row flex-col lg:items-start items-center gap-8'>
                  <div className='lg:w-[50%] space-y-4 lg:sticky top-[5%]'>
                    <p className='font-semibold text-2xl lg:text-start text-center'>Course timeline</p>
                    <Image className='lg:h-28 md:h-20 h-16 w-fit' src={success} alt='icon'/>
                    <h1 className='lg:text-4xl md:text-2xl text-xl  leading-snug font-semibold text-lime-200'>Your Step-by-Step Guide to CAMS & CGSS Success</h1>
                    <p className='text-gray-400'>Master the essentials, refine your skills, and excel with a structured 16-week roadmap for certification excellence.</p>
                  </div>
                  <div className='lg:w-[50%] space-y-4'>
                    {roadmap.map((data, index)=>
                    (
                      <div className='space-y-4 p-8 rounded-xl shadow-2xl' key={index}style={{backgroundColor: 'var(--primary-bg)'}}>
                       {/* <Image className='lg:h-12 h-10 w-fit text-sm md:text-base' src={data.icon} alt='icon'/> */}
                        <h1 className='font-semibold'>Week {data.weeks}</h1>
                        <p className='font-semibold'>{data.focus}</p>
                        <p className='text-gray-400'>{data.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
            </div>

            <div className='sm:px-[10vw] px-[15vw] py-12'>
            <h1 className='font-semibold w-full text-center text-2xl mb-8'>Testimonials</h1>
            <Carousel >
            <CarouselContent>
            {feedbacks.map((feed, index) => (
            <CarouselItem key={index} className='lg:basis-1/3'>
              <>
                <CardContent className="flex flex-col items-start gap-4 justify-center md:p-6 p-4 bg-white">
                        <Image className='h-14 text-sm md:text-base aspect-square w-fit object-cover rounded-full' src={feed.image} alt='user'/>
                        <h1 className='font-semibold'>{feed.name}</h1>
                        <p className=''>{feed.feedback}</p>
                </CardContent>
              </>
          </CarouselItem>
          ))}
          </CarouselContent>
          <CarouselPrevious/>
          <CarouselNext />
          </Carousel>
          </div>

          <div className='lg:px-[10vw] px-[5vw] py-12 flex flex-col gap-6 items-center' style={{backgroundColor: 'var(--primary-color)'}}>
              <p className='font-semibold text-2xl mb-4 text-white'>FAQs</p>
              <div className='flex flex-col gap-8 lg:w-[80%] w-full'>
              {faqData.map((data, index)=>
              (
                <Accordian data={data} key={data.id} index={index} showFaq={showFaq} setShowFaq={setShowFaq}/>
              ))}
              </div>
          </div>

          <div className='sm:px-[10vw] px-[5vw] py-12 flex lg:flex-row flex-col gap-8'>
            <div className='lg:w-[50%] w-full space-y-4'>
              <p className='font-semibold text-2xl'>Heard us enough?</p>
              <h1 className='lg:text-4xl md:text-2xl text-xl  leading-snug font-semibold text-orange-700'>Request a Callback – Let Us Guide You to Success</h1>
              <p className='text-gray-400'>Get personalized assistance, clear your doubts, and take the first step toward achieving your CAMS & CGSS certifications with expert guidance.</p>
            </div>
            <div className='lg:w-[50%] w-full'>
              <RequestForm/>
            </div>
          </div>
          <Footer/>
        </div>
    )
}

export default Home

