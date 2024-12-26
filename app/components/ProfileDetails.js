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
import { useForm } from "react-hook-form"
import { z } from "zod"
 
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

const formSchema = z.object({
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  contact: z.string().min(10, {
    message: "Invalid contact number",
  }),
  linkedIn: z.string().min(10, {
    message: "Enter valid URL",
  }),
  organisation: z.string().min(4, {
    message: "Enter valid company name",
  }),
  experience: z.string().min(1, {
    message: "Invalid experience",
  }),
  country: z.string().min(4, {
    message: "Enter valid country",
  }),
})

const ProfileDetails = ({userData, setEditInfo, editInfo, getUserData}) =>
{
    const { name, contact, linkedIn, organisation, experience, country } = userData;

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: 
        {
            name,
            contact,
            linkedIn,
            organisation,
            experience,
            country, 
        },
    })

    async function onSubmit(data) 
    {
        try
        {
            const url = `api/user/${userData._id}`
            const response = await axios.put(url, data);
            getUserData();
            toast(response.data.message);
            setEditInfo(false)
        }   
        catch(error)
        {
            console.log(error)
        }
    }

    return (
    <Dialog open={editInfo} onOpenChange={setEditInfo}>
        <DialogTrigger asChild>
            <Button>Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit your profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here.
                </DialogDescription>
            </DialogHeader>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 md:text-base text-sm' {...field} />
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
                        <FormLabel>Contact</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 md:text-base text-sm' {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name="organisation"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Organisation</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 md:text-base text-sm' {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Experience</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 md:text-base text-sm' {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>)}
                />      
                <FormField
                    control={form.control}
                    name="linkedIn"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Linked in</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 md:text-base text-sm' {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                        <Input className='md:h-12 h-10 md:text-base text-sm' {...field} />
                        </FormControl>
                        <FormDescription>
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>)}
                />
                       
                <Button type="submit">Update</Button>
                </form>
            </Form>
        </DialogContent>
    </Dialog>
  )
}

export default ProfileDetails
