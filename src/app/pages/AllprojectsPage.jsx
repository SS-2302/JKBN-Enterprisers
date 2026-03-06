export function AllProjectsPage(){
    return(
    <div className="min-h-screen bg-gray-50">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 leading-tight py-40 text-center">
            <span className="text-[#333] font-bold">launching this page </span>
          <span className="text-[#6cc93e] font-bold">Soon !</span><br />
          <span className="text-[#fecd3f] font-bold">(Projects)</span>
        </h1>

    </div>
)
}




// import { Link } from 'react-router-dom';
// import { ArrowLeft, Loader2 } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { fetchGoogleDriveImages } from '../data/googleDrive';
// import { ImageWithFallback } from '../components/ImagewithFallback';


// export function AllProjectsPage() {
//   const [allProjects, setAllProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filterType, setFilterType] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     async function loadProjects() {
//       try {
//         setLoading(true);
//         // Fetch all images from Google Drive (sorted by newest first)
//         const images = await fetchGoogleDriveImages();
//         setAllProjects(images);
//         setError(null);
//       } catch (err) {
//         setError('Failed to load projects. Please try again later.');
//         console.error('Error loading projects:', err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadProjects();
//   }, []);

  

//   const filteredProjects = allProjects.filter(project => {
//     const matchesType = filterType === 'All' || project.type === filterType;
//     const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          (project.location && project.location.toLowerCase().includes(searchQuery.toLowerCase()));
//     return matchesType && matchesSearch;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header with Back Button */}
//       <div className="bg-linear-to-br from-[#273a69] via-[#15203b] to-[#060a12] py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white mt-15">
//           <Link
//             to="/"
//             className="inline-flex items-center gap-2 text-white hover:text-[#6cc93e] transition-colors mb-6 group "
//           >
//             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-white" />
//             Back to Home
//           </Link>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4">
//             <span className="text-[#fecd3f] font-bold">All </span>
//             <span className="text-[#6cc93e] font-bold">Projects</span>
//           </h1>
//           <p className="text-lg text-slate-300 max-w-2xl">
//             {loading ? 'Loading projects...' : `Browse through our complete portfolio of  solar installations across Chennai`}
//           </p>
//         </div>
//       </div>

      

//       {/* Projects Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {loading ? (
//           <div className="flex items-center justify-center py-20">
//             <Loader2 className="w-12 h-12 text-[#6cc93e] animate-spin" />
//             <span className="ml-3 text-lg text-gray-600">Loading all projects...</span>
//           </div>
//         )  : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="relative h-48 overflow-hidden bg-gray-100">
//                   <ImageWithFallback
//                     src={project.thumbnail}
//                     alt={project.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Call to Action */}
//       <div className="bg-gray-100 rounded-xl p-8 shadow-lg text-center border border-gray-300 mb-10 ml-6 mr-6">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-[#333333] mb-4">
//             Ready to Start Your Solar Journey?
//           </h2>
//           <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
//             Join hundreds of satisfied customers who have switched to clean, renewable solar energy
//           </p>
//           <Link
//             to="/consultation"
//             className="inline-flex items-center gap-2 px-8 py-4 bg-[#fecd3f] hover:bg-[#fde047] text-[#0f172a] font-bold rounded-lg transition-all duration-300 shadow-lg"
//           >
//             Get Your Free Quote
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }