import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
     <div className="flex flex-col items-center lg:mt-20">

       <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
         Lets Build Something Today. <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>Your Automation Partner</span>
       </h1>

       <p className='text-center max-w-4xl text-neutral-500 mt-10'>We are Dedicated to empowering businesses and Organisations through seamless digital experiences. Turning Ideas into working Systems
       </p>

        <div className="flex mt-5">
            <a className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800
            hover:bg-gradient-to-l from-orange-500 to-orange-800 transition duration-200">
              <Link to="/contact">Reach Us Now</Link>
              </a>
        </div>

         <div className="flex justify-center mt-10">

          <video autoPlay muted loop className='border border-orange-70 rounded-lg w-1/2 mx-2 my-4'>
            <source src={video1} type='video/mp4' />
          </video>

            <video autoPlay muted loop className='border border-orange-70 rounded-lg w-1/2 mx-2 my-4'>
            <source src={video2} type='video/mp4' />
          </video>

         </div>

     </div>
    </>
  )
}

export default Hero