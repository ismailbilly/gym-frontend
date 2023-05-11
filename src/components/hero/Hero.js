// import Header from './Header'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'
// import heroImg from '../images/heroImage7.jpg'

const Hero = () => {
  return (
    <div className=" home  flex justify-between ">
        
        <div className="lhs basis-3/4 bg-dark text-white pb-4 px-12">
            
            <HeroLeft />
        </div>
        <div className="rhs relative basis-1/4 bg-secondary">
            <HeroRight />
            {/* <div className=" rounded-lg absolute -left-72 bottom-20 img w-[40rem] rotate-10 h-[30rem]  bg-transparent bg-no-repeat bg-cover" style={{backgroundImage:`url(${heroImg})`}}></div>  */}
        </div>
        
    </div>
  )
}

export default Hero