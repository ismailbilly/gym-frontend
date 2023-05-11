import {FaRunning, FaArrowRight} from 'react-icons/fa'
//import {GiRunningShoe} from 'react-icons/gi'

const Card = ({bg='#000080', Icon=<FaRunning />}) => {
   
  return (
  
    <div className='card flex flex-col gap-8 rounded-br-xl hover:scale-105 duration-150 p-4' style={{backgroundColor: bg}}>
        <span className='text-2xl'>{Icon}</span>
        <h3 className='font-bold' >Monthly marathon</h3>
        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil</p>
        <span className='flex items-center'><button className='mr-3'>Join Now</button> <span><FaArrowRight/></span></span>
    </div>
    
  )
}

export default Card