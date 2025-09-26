import { projects } from "../constants"
import { CheckCircle } from "lucide-react"

const Projects = () => {
  return (
    <>
    <div className="mt-20 border-b border-neutral-500 min-h-[800px]" id="projects">

         <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl tracking-wide">
             Projects
            </h2>


         <div className="flex flex-wrap mt-10 justify-center">
              
             {
                projects.map((project, index) => (
                    
                    <div key={project.index} className="w-full sm:w-full md:w-1/2 lg:w-1/3">
                       
                       <div className="rounded-xl border border-neutral-700 p-10 my-5 mx-2">
                        <p className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-xl">
                            {project.title}
                        </p>
                        
                        <p className="text-neutral-500 italic text-sm tracking-tight">
                            <span>{project.category}</span>
                        </p>

                        <ul>
                            {
                                project.features.map((feature,index) => (
                                    <li key={index} className="my-5 flex items-center"> 
                                       <CheckCircle/>
                                       <span className="ml-3">{feature}</span>
                                    </li>
                                ))
                            }
                        </ul>


                        <a href={project.link} className=" inline-flex justify-center tracking-tight mt-3 align-items border py-3 rounded-full border-orange-500 w-full hover:bg-orange-900 transition border-orange-900 duration-200"  target="_blank" >Check it Out</a>
                       </div>

                    </div>

                ))
             }

         </div>

    </div>
    </>
  )
}

export default Projects