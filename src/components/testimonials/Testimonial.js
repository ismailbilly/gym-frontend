import { useState } from 'react'
import {testimonialsData} from '../../data/testimonial'
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa'

const Testimonial = () => {
    const [testimonialIndex, settestimonialIndex] = useState(0)
    const length = testimonialsData.length
    const imageArrowLeft =()=>{
        testimonialIndex=== 0 ? settestimonialIndex(length-1): 
                    settestimonialIndex((prev)=>prev-1)
    }
    const imageArrowRight =()=>{
        testimonialIndex=== (length-1) ? settestimonialIndex(0): 
                    settestimonialIndex((prev)=>prev+1)
    }
  return (
    <div className='flex gap-8 px-12 '>
        <div className="left flex-1">
           <div className='flex flex-col gap-6 mb-8'>
           <span className='uppercase text-secondary text-lg'>testimonials</span>
            <span className=' uppercase stroke-text text-5xl'>meet our</span>
            <span className=' uppercase  font-bold text-5xl mb-4'>in-house coaches</span>
            <span className=' leading-9'>{testimonialsData[testimonialIndex].review}</span>
            <div className='text-lg'>
            <span className=' text-secondary'>{testimonialsData[testimonialIndex].name}</span>{" "}
            - <span>{testimonialsData[testimonialIndex].status}</span>
            </div>
            

           </div>
        </div>
        <div className="right flex-1 relative">
            
            <div className='absolute w-72 h-80 border-4 border-secondary m-2 left-[280px] top-4'></div>
            <div className='absolute w-64 h-80 bg-secondary m-2 right-24 top-16'></div>
            <img src={testimonialsData[testimonialIndex].image} alt="tesimonial-images" className=' object-cover absolute w-64 h-80 right-32 top-12'/>
            <div className='absolute top-80 text-xl flex gap-2 cursor-pointer'>
                <button onClick={imageArrowLeft} ><FaArrowLeft/></button>
                <button onClick={imageArrowRight}><FaArrowRight/></button>
            </div>
        </div>
    </div>
  )
}

export default Testimonial