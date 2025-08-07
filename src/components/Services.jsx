
import { services } from "../constants"

const Services = () => {
  return (
    <>
    <div className="relative border-b border-neutral-500 min-h-[650px]" id="services">

        <div className="text-center mt-20">

            <span className="bg-neutral-900 h-6 px-3 py-2  uppercase text-orange-500 rounded-full text-sm font-medium">
                ProsperSites Services
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide mt-5">
             Why You Need Us
            </h2>

        </div>

        <div className="flex flex-wrap mt-10 lg:mt-20">
            {
                 services.map((service, index) => (
                    <div key={index} className="w-full sm:w-full md:w-1/2 lg:w-1/3">
                       <div className="flex">
                          
                           <div className="flex h-10 w-10 p-2 mx-6 text-orange-500 bg-neutral-900 justify-center items-center rounded-full">
                               {service.icon}
                           </div>

                           <div>
                              <h5 className="mt-2  text-xl">{service.text}
                              </h5>
                              <p className="text-sm mb-20 mt-5 text-neutral-400">{service.description}</p>
                           </div>

                       </div>
                    </div>
                 ))
            }
        </div>

    </div>
    </>
  )
}

export default Services