import Image from 'next/image';
import star from '../../assets/star.png'

const Rating = ({value}) =>
{
    const ratings = new Array(value).fill(0);

    return(
        <div className='flex items-center gap-1'>
        {ratings.map((_,index)=>
        (
            <Image className='h-5 w-5' src={star} alt='icon' key={index}/>
        ))}
        </div>
    )
}

export default Rating