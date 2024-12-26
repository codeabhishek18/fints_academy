import { toast } from 'sonner';
import axios from 'axios';
import { Card } from '@/components/ui/card';

const Enrollment = ({batch, enrollment, getBatch}) =>
{
    const { user } = enrollment;

    const handleAccess = async () =>
    {
        try
        {
            const grant = enrollment.access === 'true' ? 'false' : 'true'  
            const url = `/api/enrollments/access/${enrollment._id}`
            const response = await axios.put(url, { access: grant});
            getBatch();
            toast(response.data.message || response.data.error)
        }
        catch(error)
        {
            toast.error(error.message)
        }
    }

    return(
        <Card className='rounded p-4 flex justify-between text-sm md:text-base'>
        <div className=''>
            <p>{user.name}</p>
        </div>
        {batch.access === 'true' && <button className='' onClick={handleAccess}>{enrollment.access === 'true' ? 'Revoke' : 'Grant'}</button>}
    </Card>
    )
}

export default Enrollment