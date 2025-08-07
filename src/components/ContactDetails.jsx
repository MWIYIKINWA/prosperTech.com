
import isaac from "../assets/profile-pictures/isaac.jpeg"
import { MapPin } from "lucide-react"
import { PhoneCall } from "lucide-react"
import { MailCheck } from "lucide-react"

const ContactDetails = () => {
  return (
    <>
    <article className="max-w-2xl px-6 py-24 mx-auto space-y-12 ">
	<div className="w-full mx-auto space-y-4 text-center">
		
	<h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Contact Us Today <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> Lets Make it Happen</span>
       </h1>


	</div>

	<div className="pt-12 border-t border-gray-300">
		<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
			<img src={isaac} alt="" className="self-center flex-shrink-0 w-48 h-50 border rounded-full md:justify-self-start bg-gray-500 border-gray-300" />
			<div className="flex flex-col mt-7 text-center md:text-left">
				<h4 className="text-lg font-semibold">Mwiyikinwa Isaac</h4>
                <p className="text-sm italic text-orange-700">Developer at ProsperSites</p>
				<p className="text-neutral-500 mt-2">Every Solution We design, and every Application We deploy is guided by a belief: technology should serve people, amplify impact, and tell meaningful stories.</p>
			</div>
		</div>
	</div>


   <div className="flex flex-col border border-neutral-700 my-10 rounded p-15 hover:border-orange-700">

          <div className="flex flex-row gap-5 mb-4">
             <MapPin />
             <p>Wakiso District, Uganda</p>
          </div>

         <div className="flex flex-row gap-5 mb-4">
             <PhoneCall />
             <p>+ (256) 787248298</p>
          </div>

         <div className="hidden md:flex flex-row gap-5">
             <MailCheck />
             <small>isaacmwiyikinwa08@gmail.com</small>
          </div>

   </div>

</article>
    </>
  )
}

export default ContactDetails