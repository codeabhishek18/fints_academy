
import logo from '../../assets/logo.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Query = () =>
{

    return(
        <div className='bg-white shadow-sm rounded'>
            <div className='p-6 rounded' style={{background: 'var(--primary-color)'}}>
                <Image className='h-8 w-fit' src={logo} alt='FINTS AML'/>
            </div>
            <div className='min-h-96 p-4 w-96 flex flex-col gap-4'>
                <p>Drop your query, so that we get back to you ASAP!</p>
                <div className='flex flex-col gap-4 items-start'>
                    <Label htmlFor="email">Full Name</Label>
                    <Input type="email" placeholder="Full Name" />
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" placeholder="Email" />
                    <Label htmlFor="email">Query</Label>
                    <Input type="email" placeholder="Query" />
                    <Button>Button</Button>
                </div>


                {/* <div className={styles.form}>
                    <Input className={styles.input} color='grey' sx={{color:'white'}} placeholder='Full name'/>
                    <Input className={styles.input} color='grey' sx={{color:'white'}} placeholder='Email'/>
                    <Input className={styles.input} color='grey' sx={{color:'white'}} placeholder='Contact'/>
                    <FormControl color='grey' variant="standard">
                        <InputLabel color='grey' sx={{color: 'grey'}} id="demo-simple-select-standard-label">Course</InputLabel>
                        <Select sx={{color: 'white'}} labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" label="Course">
                            <MenuItem value='CAMS'>CAMS</MenuItem>
                            <MenuItem value='CGSS'>CGSS</MenuItem>
                        </Select>
                     </FormControl>
                    <button className={styles.submit}>Submit</button>
                </div> */}
            </div>
        </div>
    )
}

export default Query