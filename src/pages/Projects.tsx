import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Geospatial Sentiment Analysis for Urban Water Scarcity Detection',
      description:
        'Developed a system to analyze social media data related to urban water scarcity using sentiment analysis and geospatial mapping. Applied machine learning and NLP techniques to classify public sentiment and identify water-scarcity hotspots. Visualized location-based insights on interactive maps to support urban planning and civic response.',
      technologies: ['Python', 'Machine Learning', 'NLP', 'Data Visualization', 'Geospatial Analysis'],
      github: 'https://github.com/SHIBANISSK/GEOSPATIAL-SENTIMENTAL-ANALYSIS-3.git',
      detailsAvailable: true
    },
    {
      title: 'Journey Bot',
      description:
        'Developed an automation-based Journey Bot using UiPath to assist users with travel-related queries. Automated tasks such as fetching journey details, schedules, and basic travel information through structured workflows. This project demonstrates hands-on experience in robotic process automation and user-oriented automation solutions.',
      technologies: ['UiPath', 'RPA', 'Automation Workflows'],
      github: null,
      detailsAvailable: false
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Practical applications of programming and machine learning concepts
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.detailsAvailable && (
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <ExternalLink size={18} />
                      Project Details
                    </button>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-50 rounded-xl p-8">
            <p className="text-gray-700 mb-4">
              More projects coming soon as I continue learning and building!
            </p>
            <a
              href="https://github.com/SHIBANISSK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <Github size={20} />
              View All Repositories on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
