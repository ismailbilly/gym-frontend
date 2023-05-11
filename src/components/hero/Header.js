import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <div className="text-white py-4 flex justify-between items-center ">
        <h3 className="brandName text-4xl font-brand">
            FBuddy.
        </h3>
        
        <ul className="flex flex-col sm:flex-row justify-between gap-8">
        <li className=" hover:text-secondary hover:scale-110 duration-200"><a href="/" >Home</a></li>
        <li  className=" hover:text-secondary hover:scale-110 duration-200"><a href="/">Progress</a></li>
        <li  className=" hover:text-secondary hover:scale-110 duration-200"><a href="/">Plans</a></li>
        <li  className=" hover:text-secondary hover:scale-110 duration-200"><a href="/">Calories</a></li>
        <li  className=" hover:text-secondary hover:scale-110 duration-200"><a href="/">Testimonials</a></li>
        </ul>
        
    </div>
  )
}

export default Header