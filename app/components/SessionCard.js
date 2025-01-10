
import agenda from '@/assets/agenda.png'
import complete from '@/assets/success-icon.png'
import pending from '@/assets/pending.png'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"  
import Switch from './Switch'
import { Label } from '@/components/ui/label'

const SessionCard = ({session, index, updateSessionStatus, activeAgenda, setActiveAgenda, level}) =>
{
    const handleAgenda = (e) =>
    {
        e.stopPropagation();
        setActiveAgenda(index)
    }

    return(
        <Card className='flex justify-between items-center text-sm p-4'>
            <div className='flex items-center gap-2'>
                <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger><Image className='h-5 w-fit' src={agenda} alt='agenda'/></TooltipTrigger>
                    <TooltipContent>
                        <p>{session.description}</p>
                    </TooltipContent>
                </Tooltip>
                </TooltipProvider>
                <p>Session {index+1}</p>
            </div>
            
            {level === "admin" ? 

            <div className='flex items-center gap-2'>
                <Switch id={session._id} status={session.status} updateSessionStatus={updateSessionStatus}/>
                <Label>{session.status}</Label>
            </div> : 
            <div className='flex items-center'>
                <p className='text-muted-foreground'>{session.status}</p>
            </div>}
        </Card>
    )
}

export default SessionCard