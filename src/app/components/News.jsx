import { useEffect, useState } from 'react';
import { ExternalLink, Calendar, Newspaper, TrendingUp, RefreshCw } from 'lucide-react';
import { getSolarNews, refreshNews } from '../data/news';
import { toast } from 'react-hot-toast';

export function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      const articles = await getSolarNews();
      setNews(articles.slice(0, 6)); // Show only 6 articles on home page
    } catch (error) {
      console.error('Error loading news:', error);
      toast.error('Failed to load news articles');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      const articles = await refreshNews();
      setNews(articles.slice(0, 6));
      toast.success('News updated successfully!');
    } catch (error) {
      toast.error('Failed to refresh news');
    } finally {
      setRefreshing(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
  const colors = {
    Innovation: "bg-purple-500",
    Policy: "bg-blue-500",
    Market: "bg-green-500",
    Technology: "bg-yellow-500",
    Industry: "bg-orange-500",
  };

  return colors[category] || "bg-gray-500";
};

  if (loading) {
    return (
      <section className="py-20 bg-linear-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#22c55e] border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading latest solar news...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-20 bg-linear-to-br from-[#273a69] via-[#15203b] to-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-[#6cc93e]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#333]">
              <span className="text-[#fecd3f] font-bold">Latest </span>
              <span className="text-[#6cc93e] font-bold">Solar News</span>
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto mb-6 font-normal">
            Stay updated with the latest innovations, breakthroughs, and developments in solar energy from around the world
          </p>
          
          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#fecd3f]/30 rounded-full font-semibold text-sm text-gray-200 hover:text-[#6cc93e] transition-colors duration-300 disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            {refreshing ? 'Refreshing...' : 'Refresh News'}
          </button>
          
          <p className="text-xs text-yellow-600 mt-2">
            ⚡ Automatically updates weekly
          </p>
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800';
                  }}
                />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                  {article.category}
                </div>

                {/* External Link Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-[#333]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Source and Date */}
                <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Newspaper className="w-3 h-3" />
                    {article.source.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(article.publishedAt)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg text-[#333] mb-3 line-clamp-2 group-hover:text-[#6cc93e] transition-colors duration-300 font-semibold">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[rgba(51,51,51,0.7)] line-clamp-3">
                  {article.description}
                </p>

                {/* Read More */}
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#6cc93e] group-hover:gap-3 transition-all duration-300">
                  Read Full Article
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-gray-50/20 rounded-xl p-5 shadow-lg text-center border border-gray-200">
          <h3 className="text-xl text-[#6cc93e] mb-4 font-semibold">
            Stay Informed About Solar Industry Trends
          </h3>
          <p className="text-[rgba(255,255,255,0.7)] max-w-5xl mx-auto">
            Our news section is powered by real-time data from leading energy publications worldwide. 
            Articles are automatically curated and updated weekly to bring you the most relevant developments 
            in solar technology, market trends, policy changes, and innovative breakthroughs.
          </p>
          {/* <p className="text-sm text-gray-500 mt-4">
            <strong>Note:</strong> To enable live news updates, add your NewsAPI key in the newsService.ts file. 
            <a 
              href="https://newsapi.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#6cc93e] hover:text-[#5ab84f] ml-1"
            >
              Get your free API key here →
            </a>
          </p> */}
        </div>
      </div>
    </section>
  );
}
