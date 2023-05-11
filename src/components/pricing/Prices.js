import PriceCard from './PriceCard'
import {RiPlantFill, RiVipCrownFill} from 'react-icons/ri'
import {TbPropeller} from 'react-icons/tb'
const Prices = () => {
  return (
    <div className='px-12'>
        <div className='uppercase text-5xl flex justify-center gap-8'>
            <span className='stroke-text'>ready to start </span>
            <span className='font-bold'>your journey</span> 
            <span className='stroke-text'> with us ?</span>
            </div>
        <div className="card flex justify-center gap-8 mt-8">
        <PriceCard category='basic' price='25' hours='2' Icon={<RiPlantFill/>}/>
        <PriceCard category='premium' price='45' hours='5'bg='orange'color='white' Icon={<RiVipCrownFill/>}/>
        <PriceCard category='pro' price='55' hours='8' Icon={<TbPropeller/>}/>
        </div>
    </div>
  )
}

export default Prices