import {FaGithubSquare, FaTwitterSquare, FaFacebookSquare, FaRegCopyright} from 'react-icons/fa'

const Footer = () => {
    const year=new Date().getFullYear()
  return (
    <div>
        <hr className="border-2 border-secondary mb-10"/>
        <div className="footer flex justify-center items-center gap-12 mb-8">
            <a href="http://www.github.com" className='text-secondary text-4xl'><FaGithubSquare /></a>
            <a href="http://www.twitter.com" className='text-secondary text-4xl'><FaTwitterSquare /></a>
            <a href="http://www.facebook.com" className='text-secondary text-4xl'><FaFacebookSquare /></a>
        </div>
        <div className=' flex justify-center items-center gap-2'>
            <span><FaRegCopyright className=' text-center'/></span>
            <span>copyright</span> 
            <span>{year}</span> 
        </div>
    </div>
  )
}

export default Footer