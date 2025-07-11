
import { testimonials } from "../constants"
import { Link } from "react-router-dom";

const Testimonial = () => {
  return (
    <>
    <div className="mt-20 border-b border-neutral-500 min-h-[650px]" id="testimonials">
      
      <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
         What People <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>Are Saying</span>
       </h2>

       <div className="flex flex-wrap justify-center mt-12">

           {
            testimonials.map((testimonial, index) => (

              <div key={testimonial.index} className="w-full sm:w-full md:w-1/2 lg:w-1/3">
                  <div className="bg-neutral rounded-md text-md p-10 font-thin border border-neutral-800 my-6 mx-2">
                    <p>{testimonial.text}</p>
                    <div className="flex mt-5 items-start">
                       <img className="h-12 w-12 rounded-full border border-neutral-300" src={testimonial.image} alt={testimonial.user} srcset="" />
                       <div className="ml-3 ">
                         <h6 className="font-bold">{testimonial.user}</h6>
                         <p className="italic text-sm muted">{testimonial.company}</p>
                       </div>
                    </div>
                  </div>
              </div>

            ))
           }

       </div>

          <div className="flex justify-center">
             <a className=" rounded border border-neutral-200 py-4 px-4 my-8 hover:border-orange-900 transition duration-200">
               <Link to="/contact">SEND YOUR REQUEST NOW</Link>    
             </a>
         </div>

    </div>
    </>
  )
}

export default Testimonial
