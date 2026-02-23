import { Code, Brain, Users } from 'lucide-react';

export default function About() {
  const programmingLanguages = [
    { name: 'C', level: 'Intermediate' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' }
  ];

  const technologies = [
    { name: 'Machine Learning', level: 'Learning' },
    { name: 'UI/UX Basics', level: 'Beginner' }
  ];

  const softSkills = [
    'Problem Solving',
    'Continuous Learning',
    'Team Collaboration'
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            I am a motivated Computer Science and Engineering student with a strong foundation
            in programming and core computer science subjects. I am enthusiastic about learning
            new tools and technologies, especially in Machine Learning and automation. I enjoy
            transforming theoretical knowledge into practical applications through projects and
            hands-on experience. I am actively seeking opportunities to gain industry exposure
            and grow as a technology professional.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Skills</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                <Code className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Programming Languages</h3>
              <div className="space-y-3">
                {programmingLanguages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{lang.name}</span>
                    <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                <Brain className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies & Domains</h3>
              <div className="space-y-3">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{tech.name}</span>
                    <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {tech.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                <Users className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Soft Skills</h3>
              <div className="space-y-3">
                {softSkills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-4">What Drives Me</h2>
          <p className="text-lg leading-relaxed opacity-95">
            I am passionate about leveraging technology to solve real-world problems. My interest
            in Machine Learning stems from its potential to create intelligent systems that can
            learn and adapt. I believe in the power of continuous learning and hands-on practice
            to master new technologies. Every project I undertake is an opportunity to expand my
            knowledge and contribute meaningfully to the field of computer science.
          </p>
        </div>
      </div>
    </div>
  );
}
