import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FcSportsMode} from 'react-icons/fc'
import {MdOutlineSportsTennis, MdSportsHandball, MdSportsBasketball} from 'react-icons/md'
import {SiTransportforireland, SiOpenaigym} from 'react-icons/si'

const Reason = () => {
  return (
    <div className='reason flex gap-4 px-12'>
      <div className="left bg-secondary flex-1">hello</div>

      <div className="right flex flex-col flex-1 gap-8 uppercase">
        <p className='text-md text-secondary'>some reasons</p>
        <div className='text-4xl'>
          <span className='stroke-text'> why </span><span className='font-bold'> choose us?</span>
        </div>
        <div className="points flex gap-4 items-center">
          <span className='text-secondary text-3xl'><IoMdCheckmarkCircleOutline /></span>
          <span>over 140+ expert coaches</span>
        </div>
        <div className="points flex gap-4 items-center">
          <span className='text-secondary text-3xl'><IoMdCheckmarkCircleOutline /></span>
          <span>train smarter and faster than before</span>
        </div>
        <div className="points flex gap-4 items-center">
          <span className='text-secondary text-3xl'><IoMdCheckmarkCircleOutline /></span>
          <span>1 free program for new member</span>
        </div>
        <div className="points flex gap-4 items-center">
          <span className='text-secondary text-3xl'><IoMdCheckmarkCircleOutline /></span>
          <span>reliable partners</span>
        </div>
        <p>our partners</p>
        <div className='flex gap-4 text-2xl'>
          <span><SiTransportforireland /></span>
          <span><FcSportsMode /></span>
          <span><MdOutlineSportsTennis /></span>
          <span><MdSportsHandball /></span>
          <span><MdSportsBasketball /></span>
          <span><SiOpenaigym /></span>
        </div>
      </div>
    </div>
  )
}

export default Reason