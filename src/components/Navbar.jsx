import { use } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, Links } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleNavbar = () => {
       setMobileMenu(!mobileMenu)
    };

  return (
    <>
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/50">
       
       <div className="container px-4 mx-auto relative text-sm">

           <div className="flex justify-between align-items-center">

             {/* logo */}
             <div className="flex align-items-center flex-shrink-0">
                <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                <span className="text-x tracking-tight my-auto">ProsperTech</span>
             </div>

             {/* links */}
             <ul className="hidden lg:flex ml-14 my-auto space-x-12">
                {
                    navItems.map((item, index) => (
                        <li key={index} >
                            <HashLink to={item.href}>{item.label}</HashLink>
                        </li>
                    ))
                }
             </ul>

             {/* button */}
             <div className="hidden lg:flex">
                 <a className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-to-l from-orange-500 to-orange-800 transition duration-200">
                   <Link to="/contact"> Contact Us</Link>
                    </a>
                 </div>

              {/* mobile menu icon*/}

              <div className="lg:hidden md:flex flex-col justify-end mt-auto">
                  <button onClick={toggleNavbar}>
                     {mobileMenu ? <X/>: <Menu/>}
                  </button>
              </div>



           </div>
 

           {/* mobile menu */}
           {
              mobileMenu && (
                <div className="fixed right-0 z-20 flex flex-col justify-center p-8 bg-neutral-900 w-full items-center lg:hidden ">

                    <ul className="">
                        {
                            navItems.map((items,index) => (
                                <li key={index} className="mt-1">
                                    <a href={items.href}>{items.label}</a>
                                </li>
                            ))
                        }
                    </ul>

           
             <div className="flex">
                 <a className="py-2 mt-3 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-to-l from-orange-500 to-orange-800 transition duration-200 "><Link to="/contact"> Contact Us</Link></a>
                 </div>


                </div>
              )
           }


       </div>

    </nav>
    </>
  )
}

export default Navbar