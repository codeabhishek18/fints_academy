import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
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
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
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

const CourseForm = ({newBatch, setNewBatch}) =>
{
    const [ isLoading, setIsLoading ] = useState(true);

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
    <Dialog open={newBatch} onOpenChange={setNewBatch}>
        <DialogTrigger asChild>
            <Button className='h-12 text-sm md:text-base'>New Batch</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Create new course</DialogTitle>
                <DialogDescription>
                    Announce your upcoming course
                </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
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
                    name="description"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
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
                    name="price"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
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
                    name="offerPrice"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 text-sm' {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>)}
                />
                       
                <Button type="submit" className='md:h-12 h-10 text-sm w-full'>Create</Button>
              </form>
            </Form>
        </DialogContent>
    </Dialog>
  )
}

export default CourseForm

