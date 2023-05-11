import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaArrowRight} from 'react-icons/fa'

const PriceCard = ({category,price, hours, bg='#000080', color, Icon}) => {
  return (
    <div >
       <div className='p-4 flex flex-col gap-4 bg-mute hover:scale-105 duration-150' style={{backgroundColor:bg}}>
        <div className='text-2xl'>{Icon}</div>
            <h4 className='uppercase text-xl font-bold'>{category} plan</h4>
            <p className='text-4xl font-bold my-6' style={{color:color}}><span>$ {" "}</span>{price}</p>
            <div className="points flex gap-4 items-center">
                <span style={{color:color}} className='text-secondary text-3xl'><IoMdCheckmarkCircleOutline /></span>
                 <span>{hours} hours of exercises</span>
             </div>
             <div className="points flex gap-4 items-center">
                <span style={{color:color}} className='text-secondary text-3xl'><IoMdCheckmarkCircleOutline /></span>
                 <span>Free consultation of coaches</span>
             </div>
             <div className="points flex gap-4 items-center">
                <span className='text-secondary text-3xl' style={{color:color}}><IoMdCheckmarkCircleOutline /></span>
                 <span>Access to the community</span>
             </div>
             <div className='flex items-center my-4' >See more benefits <span><FaArrowRight className='ml-4'/></span></div>
             <button className='font-bold bg-white text-dark p-2 rounded-md'>Join now</button>
       </div>
    </div>
  )
}

export default PriceCard