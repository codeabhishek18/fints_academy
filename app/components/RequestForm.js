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
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(7, {
    message: "Name is required",
  }),
  email: z.string().min(3, {
    message: "Email is required",
  }),
  contact: z.string().min(7, {
    message: "Contact is required",
  })
})

const RequestForm = () =>
{
    const [ isLoading, setIsLoading ] = useState(false);

    const form = useForm({
            resolver: zodResolver(formSchema),
            defaultValues: 
            {
              name: "",
              email: "",
              contact: ""
            },
        })

    async function onSubmit(data) 
    {
        try
        {
            setIsLoading(true)
            const url = '/api/query'
            // const response = await axios.post(url, data);
            // toast(response.data.message);
        }   
        catch(error)
        {
            toast(error.message)
        }
        finally
        {
          setIsLoading(false)
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
                        <FormLabel className='text-gray-400'>Name</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 text-sm border-gray-800 bg-black' placeholder='Fints' {...field} />
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
                        <FormLabel className='text-gray-400'>Email</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 text-sm border-gray-800 bg-black' placeholder='admin@fintsacademy.com' {...field} />
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
                        <FormLabel className='text-gray-400'>Phone Number</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 text-sm border-gray-800 bg-black' {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>)}
                />

              {isLoading ? <Button className='lg:h-12 h-10 text-md'>
                <Loader2 className='animate-spin'/>
                </Button> :                       
                <Button type="submit" className='md:h-12 h-10 md:text-base text-sm font-semibold w-full'>Request Callback</Button>}
              </form>
        </Form>
  )
}

export default RequestForm

