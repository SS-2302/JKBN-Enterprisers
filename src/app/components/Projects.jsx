import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { fetchGoogleDriveImages } from '../data/googleDrive';
import { ImageWithFallback } from './ImagewithFallback';



export function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        // Fetch images from Google Drive (sorted by newest first)
        const images = await fetchGoogleDriveImages();
        setProjects(images);
        setError(null);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error('Error loading projects:', err);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  // Show only the 4 most recently uploaded images
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#333] mb-4">
            Our <span className="text-[#6cc93e] font-bold">Recent Projects</span>
          </h2>
          <p className="text-lg text-[rgba(51,51,51,0.7)] max-w-2xl mx-auto">
            Powering homes and businesses across India with reliable solar solutions
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-[#6cc93e] animate-spin" />
            <span className="ml-3 text-lg text-gray-600">Loading projects...</span>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-500 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="text-[#6cc93e] hover:text-[#5ab84f] font-semibold"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-[rgba(51,51,51,0.7)] mb-6">
                And <strong className="text-[#6cc93e]">More</strong> successful installations across Chennai
              </p>
              
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#6cc93e] hover:bg-[#5ab84f] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                View More Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}