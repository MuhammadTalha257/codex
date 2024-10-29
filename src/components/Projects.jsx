import React from 'react'
import { PROJECTS } from '../constants'
import { MdArrowOutward } from 'react-icons/md';

export const Projects = () => {
    
  return (
<div> 
  <section className="pt-20" id="projects">
    <h2 className="mb-8 text-center text-3xl lg:text-4xl font-bold">Projects</h2>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS?.map((project) => (
        <div key={project?.id} className="group relative rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105">
          <img 
            src={project?.image} 
            alt={project.name} 
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 bg-black bg-opacity-50 p-4">
            <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
            <p className="mb-4 text-center overflow-hidden max-h-24">{project.description}</p>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300 transition duration-300">
              <div className="flex items-center justify-center">
                <span>View on GitHub</span>
                <MdArrowOutward className="ml-1" />
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>


  )
}
