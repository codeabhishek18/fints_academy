'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import Header from '../components/Header'
import CourseCard from '../components/CourseCard'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Slash } from "lucide-react"
import Image from 'next/image'
import { toast } from 'sonner'

const Courses = () =>
{
    const [ courses, setCourses ] = useState(null);
    const  [ isLoading, setIsLoading ] = useState(true);    

    useEffect(()=>
    {
        getCourses();
    },[])

    const getCourses = async () =>
    {
        try
        {
            const url = `/api/course`
            const response = await axios.get(url);
            setCourses(response.data);
        }
        catch(error)
        {
            toast(error.message)
        }
        finally
        {
            setIsLoading(false);
        }
    }

    const removeCourse = async (id) =>
    {
        try
        {
            const url = `/api/course/${id}`
            const response = await axios.delete(url)
            setCourses(response.data)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    if(isLoading)
        return <Loading/>
    

    return(
        <div className='mt-12'>
            <Header/>
            <Image className='object-cover h-[100%]' src='https://images.unsplash.com/photo-1637946175491-53bca31c90ba?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='FINTS AML' layout='fill' priority={true} />
                         
            <div className='lg:px-[10vw] px-[5vw] py-12 flex flex-col gap-4'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                    <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 z-10 text-white'>
            {courses?.map((course) =>
            (
                <CourseCard level="user" key={course._id} course={course} removeCourse={removeCourse}/>
            ))}
            </div>
            </div>
        </div>
    )
}

export default Courses