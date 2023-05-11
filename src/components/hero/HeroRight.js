import heroImg from '../../images/heroImage7.jpg'
import { motion } from "framer-motion"

const HeroRight = () => {
  const transition ={type:'spring', duration: 5}
    return (
      <div>
           <div className=" flex flex-col gap-8 items-center overflow-hidden">
              <div className=' header-btn'>
                  <button className=' bg-white mt-4 py-2 px-4 rounded-br-xl font-bold text-black '>Join now</button>
              </div>
              <div className=" border-2 border-dark p-2 m-2 rounded-md">
                  
                  <motion.div initial={{right: '1rem'}} whileInView={{right: '4rem'}} transition={transition}
                  className=" card flex flex-col justify-between w-fit h-fit gap-8 p-2 rounded-md bg-[#000080]">
                       <div className="circle w-8 h-8 rounded-full bg-[#ff8c00]"></div>
                      <span className='text-white text-xs font-medium tracking-wide'>Live Healthy</span>
                 </motion.div>
              </div>
              <img src={heroImg} alt="" />
            </div>
      </div>
    )
  }
  
  export default HeroRight
