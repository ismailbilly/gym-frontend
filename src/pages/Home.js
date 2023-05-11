import Hero from '../components/hero/Hero'
import Programs from '../components/programs/Programs'
import Reason from '../components/reasons/Reason'
import Prices from '../components/pricing/Prices'
import Testimonial from '../components/testimonials/Testimonial'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div className='text-white bg-dark flex flex-col gap-36 pb-12'>
      <Hero /> 
       <Programs /> 
       <Reason />
      <Prices  />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
    
    
  )
}

export default Home