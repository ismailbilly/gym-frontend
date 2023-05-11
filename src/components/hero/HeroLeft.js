import { motion } from "framer-motion"
import Header from './Header'
const HeroLeft = () => {
    //This is for the animation using framer-motion package
    const transition ={type:'spring', duration: 5}
  return (
   
    <div className="hero flex flex-col gap-6">
        <Header />
        <div className='flex items-center justify-start relative bg-mute border-white rounded-2xl font-bold py-2 px-4 w-fit mt-32'>
            {/* This is the div with animation */}
             <motion.div className='w-14 h-[80%] bg-[#F0B400] rounded-2xl absolute left-2 z-10' initial={{left: '238px'}} whileInView={{left: '8px'}} transition={{...transition, type:'tween'}}>
            
             </motion.div>
           
            <span className=' z-20' >The most reliable fitness buddy</span>
        </div>
        {/* hero text */}
        <div className=" hero-text flex flex-col gap-6 text-7xl uppercase font-bold " style={{textOverflow:'inherit'}}>
            <div>
                <span className='stroke-text'>shape {" "}</span><span>your</span>
            </div>
            <div>
                <span>ideal body</span>
            </div>
        </div>
        <div className="text w-[80%] tracking-wide">
            <span>
                Trust us to help you shape and build your ideal body and live life to the fullest
                and enjoy your life loremo lores fdiioip
            </span>
        </div>
        {/* statistics */}
        <div className="stats flex gap-8">
        <div className='flex flex-col'>
            <span className='text-3xl'>140+</span>
            <span className='text-[#dcdcdc]'>expert coaches</span>
        </div>
        <div className='flex flex-col'>
            <span className='text-3xl'>978+</span>
            <span className='text-[#dcdcdc]'>member joined</span>
        </div>
        <div className='flex flex-col'>
            <span className='text-3xl'>50+</span>
            <span className='text-[#dcdcdc]'>fitness progress</span>
        </div>
        </div>
        <div className="hero-btn flex gap-6">
            <button className='bg-secondary py-2 px-4 rounded-lg'>Get Started</button>
            <button className='border border-secondary py-2 px-4 rounded-lg'>Learn More</button>
        </div>
    </div>
    
  )
}

export default HeroLeft