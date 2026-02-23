import { Download, Mail, Folder } from 'lucide-react';
import profilePhoto from '../assets/shibani385.jpg';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const skills = ['Machine Learning', 'Python', 'Java', 'C Programming', 'UI/UX', 'Data Analysis'];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/shibani-karthika.pdf';
    link.download = 'Shibani_Karthika_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Shibani Karthika S
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold">
                Computer Science Engineering Student
              </h2>
              <p className="text-lg text-gray-700">
                Pre-Final Year | Machine Learning Enthusiast
              </p>
              <p className="text-md text-gray-600 flex items-center">
                Tamil Nadu, India
              </p>

              <p className="text-gray-700 leading-relaxed mt-6">
                I am a pre-final year Computer Science and Engineering student with a strong
                interest in Machine Learning and emerging technologies. I enjoy applying
                programming fundamentals and core computer science concepts to practical
                projects and continuously expanding my technical skills.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => onNavigate('Projects')}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  <Folder size={20} />
                  View Projects
                </button>
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-lg"
                >
                  <Download size={20} />
                  Download Resume
                </button>
                <button
                  onClick={() => onNavigate('Contact')}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-all shadow-md hover:shadow-lg"
                >
                  <Mail size={20} />
                  Contact Me
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Shibani Karthika S"
                  className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills Overview</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Profile Summary</h3>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
            <p className="text-gray-700 leading-relaxed">
              Motivated Computer Science and Engineering student with a strong foundation in
              programming and core computer science subjects. Enthusiastic about learning new
              tools and technologies, especially in Machine Learning and automation. Transforming
              theoretical knowledge into practical applications through projects and hands-on
              experience. Actively seeking opportunities to gain industry exposure and grow as
              a technology professional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Project</h3>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 border border-blue-100">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Geospatial Sentiment Analysis for Urban Water Scarcity Detection
            </h4>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Developed a system to analyze social media data related to urban water scarcity
              using sentiment analysis and geospatial mapping. Applied machine learning and NLP
              techniques to classify public sentiment and identify water-scarcity hotspots.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Machine Learning</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">NLP</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Geospatial Analysis</span>
            </div>
            <button
              onClick={() => onNavigate('Projects')}
              className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
            >
              View All Projects →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
