import { useState } from 'react'

const Switch = ({id, status, updateSessionStatus}) =>
{
    const [slide, setSlide] = useState(status)

    const handleClick = async () =>
    {
        setSlide((prev) => prev === 'Upcoming' ? 'Completed' : 'Upcoming');
    }

    return(
        <div className='w-8 h-4 shadow-md border border-gray-200 rounded-3xl relative cursor-pointer' onClick={()=> {handleClick(); updateSessionStatus(id, status)}}>
            <div className={`absolute shadow-lg top-0 transition-transform rounded-full w-4 h-4 ${slide === 'Upcoming' ? 'left-0 bg-blue-950' : 'right-0 bg-yellow-400'} `}></div>
        </div>
    )
}

export default Switch