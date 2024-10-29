import project from '../../utils/constant/project'

const Card = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-contain" />
              <h3 className="text-2xl font-bold mb-2 h-[60px] overflow-scroll">{project.name}</h3>
              <p className="text-gray-400 mb-4 h-[40px] overflow-scroll">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
        </div>
          ))}
        </div>
    </div>
  )
}

export default Card
