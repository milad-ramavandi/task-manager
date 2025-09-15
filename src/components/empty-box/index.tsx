import { Inbox } from 'lucide-react'

const EmptyBox = () => {
  return (
   <div className="flex flex-col">
    <Inbox className='w-16 h-16 text-gray-600 opacity-40 mx-auto'/>
    <p className="text-center font-bold text-lg">No task</p>
   </div>
  )
}

export default EmptyBox