import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Engineering – Computer Science',
      institution: 'Panimalar Engineering College',
      duration: '2023 – Present',
      score: 'CGPA: 8.5',
      icon: GraduationCap
    },
    {
      degree: 'Higher Secondary Certification',
      institution: 'Sri Ramana Vidyalaya Montessori Higher Secondary School',
      duration: '2022 – 2023',
      score: 'Percentage: 71.5%',
      icon: GraduationCap
    }
  ];

  const certifications = [
    {
      title: 'Oracle – Generative AI',
      description:
        'Fundamentals of generative AI, large language models, prompt engineering, and responsible AI usage.',
      provider: 'Oracle'
    },
    {
      title: 'NASSCOM – Acquiring Data',
      description:
        'Data acquisition, processing, and quality management for analytics and AI applications.',
      provider: 'NASSCOM'
    },
    {
      title: 'Introduction to Information Technology & AWS Cloud',
      description:
        'Foundational understanding of IT concepts and AWS cloud computing basics.',
      provider: 'AWS'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-600" size={32} />
            Education
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <edu.icon className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1 text-gray-600">
                        <Calendar size={16} />
                        {edu.duration}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Award className="text-blue-600" size={32} />
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium">{cert.provider}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Continuous Learning</h3>
            <p className="text-lg opacity-95">
              I am committed to lifelong learning and staying updated with the latest
              technologies and industry trends. Currently exploring advanced machine learning
              concepts and cloud computing platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
