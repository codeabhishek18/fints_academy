import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
 
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormMessageeFormMessage} from "@/components/ui/form"

import axios from "axios"
import { toast } from "sonner"

import Loading from "./Loading"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

const formSchema = z.object({
  courseId: z.string().min(7, {
    message: "Course is a mandatory field",
  }),
  mentor: z.string().min(3, {
    message: "Mentor is a mandatory field",
  }),
  title: z.string().min(7, {
    message: "Invalid title",
  })
})

const RequestForm = () =>
{
    const [ isLoading, setIsLoading ] = useState(false);

    const form = useForm({
            resolver: zodResolver(formSchema),
            defaultValues: 
            {
              courseId: "",
                mentor: "",
                title: ""
            },
        })

    async function onSubmit(data) 
    {
        try
        {
            const url = '/api/course'
            const response = await axios.post(url, batchDetails);
            toast(response.data.message);
            setNewBatch(false)
        }   
        catch(error)
        {
            console.log(error)
        }
    }

    if(isLoading)
        return <Loading/>

    return (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 text-sm' {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>)}
                />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 text-sm' {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>)}
                />

                  <FormField
                    control={form.control}
                    name="contact"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 text-sm' {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>)}
                />
                       
                <Button type="submit" className='md:h-12 h-10 md:text-base text-sm font-semibold w-full'>Request Callback</Button>
              </form>
        </Form>
  )
}

export default RequestForm

