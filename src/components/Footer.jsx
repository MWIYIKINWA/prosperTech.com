import logo from "../assets/logo.png"
import { links1, links2 } from "../constants"
import { Check } from "lucide-react"
import { HashLink } from "react-router-hash-link"

const Footer = () => {
  return (
    <>
    <footer className="py-6 dark:bg-gray-100 dark:text-gray-900 mt-10">


	<div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
		<div className="flex flex-row justify-between items-center">


			<div className="w-full sm:w-full md:w-1/2 lg:w-1/3">


				<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
					<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
	                        
					</div>


                                  {/* logo */}
                                  <div className="flex items-center mr-20 justify-center flex-shrink-0">
                                     <img className="h-10 w-10" src={logo} alt="logo" />
                                     <span className="text-x tracking-tight my-auto">ProsperTech</span>
                                  </div>

				</a>
			</div>

			<div className="hidden md:block text-center mb-10 w-full md:w-1/2 lg:w-1/3">
				<p className="pb-1 text-lg font-medium text-orange-700">More Links</p>
				<ul>
                                       {
                     links2.map((link2, index) => (

                    <li key={link2.index}>
						<a rel="noopener noreferrer" className="hover:dark:text-orange-700">
							<HashLink to={link2.href}>{link2.text}</HashLink>
							</a>
					</li>

                     ))
                   }
				</ul>
			</div>


			<div className="hidden md:block text-center mb-10  w-full sm:w-full md:w-1/2 lg:w-1/3">
				<p className="pb-1 text-lg font-medium text-orange-700">Learn More</p>
				<ul>
	
                   {
                     links1.map((link1, index) => (

                    <li key={link1.index}>
						<a rel="noopener noreferrer" className="hover:dark:text-orange-700">
							<HashLink to={link1.href} >{link1.text}</HashLink>
							</a>
					</li>

                     ))
                   }

				</ul>
			</div>


		</div>
		<div className="grid justify-center pt-2 lg:justify-between">
			<div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>©{new Date().getFullYear()} All rights reserved</span>
			</div>
			<div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
				<a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-orange-600 dark:text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
						<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
					</svg>

				</a>
			</div>
		</div>
	</div>
</footer>
    </>
  )
}

export default Footer