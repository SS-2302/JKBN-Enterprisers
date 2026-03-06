// News API Service for Solar Energy News
// This service fetches the latest news about solar energy from NewsAPI

const NEWS_API_KEY = "28d33acd92f44716981d20311303e163"; // Replace with your NewsAPI key
const NEWS_API_URL = "https://newsapi.org/v2/everything";

// Cache keys
const CACHE_KEY = "solar_news_cache";
const CACHE_TIMESTAMP_KEY = "solar_news_cache_timestamp";
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

// Check if cache is valid
function isCacheValid() {
  const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
  if (!timestamp) return false;

  const cacheAge = Date.now() - parseInt(timestamp);
  return cacheAge < CACHE_DURATION;
}

// Get cached news
function getCachedNews() {
  if (!isCacheValid()) return null;

  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;

  try {
    return JSON.parse(cached);
  } catch {
    return null;
  }
}

// Save news to cache
function cacheNews(articles) {
  localStorage.setItem(CACHE_KEY, JSON.stringify(articles));
  localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
}

// Fetch news from API
async function fetchNewsFromAPI() {
  try {
    const query =
      "solar energy OR solar power OR photovoltaic OR renewable energy";
    const sortBy = "publishedAt";
    const pageSize = 12;

    const response = await fetch(
      `${NEWS_API_URL}?q=${encodeURIComponent(
        query
      )}&sortBy=${sortBy}&pageSize=${pageSize}&language=en&apiKey=${NEWS_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();

    const articles = data.articles.map((article, index) => ({
      id: `${article.publishedAt}-${index}`,
      title: article.title,
      description:
        article.description ||
        "Read more about this solar energy development...",
      url: article.url,
      urlToImage:
        article.urlToImage ||
        "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      publishedAt: article.publishedAt,
      source: {
        name: article.source.name,
      },
      category: categorizeArticle(
        article.title + " " + (article.description || "")
      ),
    }));

    return articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return getMockNews(); // fallback
  }
}

// Categorize article
function categorizeArticle(text) {
  const lowerText = text.toLowerCase();

  if (
    lowerText.includes("innovation") ||
    lowerText.includes("breakthrough") ||
    lowerText.includes("invention")
  ) {
    return "Innovation";
  } else if (
    lowerText.includes("policy") ||
    lowerText.includes("government") ||
    lowerText.includes("regulation")
  ) {
    return "Policy";
  } else if (
    lowerText.includes("market") ||
    lowerText.includes("investment") ||
    lowerText.includes("economy")
  ) {
    return "Market";
  } else if (
    lowerText.includes("technology") ||
    lowerText.includes("efficiency") ||
    lowerText.includes("research")
  ) {
    return "Technology";
  } else {
    return "Industry";
  }
}

// Mock fallback news
function getMockNews() {
  return [
    {
      id: "1",
      title:
        "Breakthrough in Perovskite Solar Cells Achieves 33% Efficiency",
      description:
        "Scientists develop new tandem solar cell technology combining perovskite and silicon layers.",
      url: "https://www.nature.com/subjects/solar-cells",
      urlToImage:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      publishedAt: "2026-02-10T08:00:00Z",
      source: { name: "Nature Energy" },
      category: "Innovation",
    },
    {
      id: '2',
      title: 'India Announces $20 Billion Solar Manufacturing Initiative',
      description: 'Government unveils massive plan to boost domestic solar panel production and reduce import dependency.',
      url: 'https://pib.gov.in/indexd.aspx',
      urlToImage: 'https://images.unsplash.com/photo-1642950863398-1fc3600a5313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-02-09T14:30:00Z',
      source: { name: 'PIB India' },
      category: 'Policy'
    },
    {
      id: '3',
      title: 'Solar + Storage Systems Now Cheaper Than Coal Plants',
      description: 'Latest analysis shows renewable energy with battery storage is more economical than traditional fossil fuel power generation.',
      url: 'https://www.iea.org/topics/renewables',
      urlToImage: 'https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-02-08T11:15:00Z',
      source: { name: 'International Energy Agency' },
      category: 'Market'
    },
    {
      id: '4',
      title: 'Transparent Solar Panels to Power Skyscraper Windows',
      description: 'New transparent photovoltaic technology allows building windows to generate electricity while maintaining visibility.',
      url: 'https://www.scientificamerican.com/energy-and-sustainability/',
      urlToImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-02-07T09:45:00Z',
      source: { name: 'Scientific American' },
      category: 'Technology'
    },
    {
      id: '5',
      title: 'World\'s Largest Floating Solar Farm Opens in Asia',
      description: 'Massive 2.1 GW floating solar installation begins operations, showcasing innovative use of water bodies for renewable energy.',
      url: 'https://www.renewable-ei.org/',
      urlToImage: 'https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-02-06T13:20:00Z',
      source: { name: 'Renewable Energy Institute' },
      category: 'Industry'
    },
    {
      id: '6',
      title: 'AI-Powered Solar Panels Increase Energy Output by 20%',
      description: 'Machine learning algorithms optimize solar panel positioning and maintenance, significantly boosting energy generation.',
      url: 'https://spectrum.ieee.org/energy',
      urlToImage: 'https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-02-05T10:00:00Z',
      source: { name: 'IEEE Spectrum' },
      category: 'Innovation'
    },
    {
      id: '7',
      title: 'Solar Energy Costs Drop 89% in Last Decade',
      description: 'Report reveals dramatic cost reduction in solar technology, making it the cheapest source of electricity in history.',
      url: 'https://www.irena.org/solar',
      urlToImage: 'https://images.unsplash.com/photo-1642950863398-1fc3600a5313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-02-04T15:30:00Z',
      source: { name: 'IRENA' },
      category: 'Market'
    },
    {
      id: '8',
      title: 'Bifacial Solar Modules Gain Market Share Globally',
      description: 'Double-sided solar panels that capture reflected light showing superior performance in real-world installations.',
      url: 'https://www.pv-magazine.com/',
      urlToImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-02-03T12:00:00Z',
      source: { name: 'PV Magazine' },
      category: 'Technology'
    },
    {
      id: '9',
      title: 'EU Sets 2030 Solar Capacity Target at 750 GW',
      description: 'European Union announces ambitious renewable energy goals with major focus on solar deployment across member states.',
      url: 'https://energy.ec.europa.eu/',
      urlToImage: 'https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-02-02T09:00:00Z',
      source: { name: 'European Commission' },
      category: 'Policy'
    },
    {
      id: '10',
      title: 'Solar Paint Technology Turns Any Surface Into Power Generator',
      description: 'Revolutionary spray-on solar cells could transform homes, vehicles, and infrastructure into energy-producing assets.',
      url: 'https://www.sciencedaily.com/news/matter_energy/',
      urlToImage: 'https://images.unsplash.com/photo-1723177548474-b58ada59986b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-02-01T14:45:00Z',
      source: { name: 'Science Daily' },
      category: 'Innovation'
    },
    {
      id: '11',
      title: 'Solar Installations Surpass 1 TW Worldwide Milestone',
      description: 'Global solar capacity reaches historic benchmark as deployment accelerates across residential and commercial sectors.',
      url: 'https://www.solarenergyindustries.org/',
      urlToImage: 'https://images.unsplash.com/photo-1642950863398-1fc3600a5313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-01-31T11:30:00Z',
      source: { name: 'Solar Energy Industries' },
      category: 'Industry'
    },
    {
      id: '12',
      title: 'Next-Gen Solar Batteries Store Energy for 100 Hours',
      description: 'New long-duration energy storage technology solves intermittency challenge, enabling 24/7 solar power availability.',
      url: 'https://www.cell.com/energy',
      urlToImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800',
      publishedAt: '2026-01-30T08:15:00Z',
      source: { name: 'Cell Energy' },
      category: 'Technology'
    }
  ];
}

// Main function
export async function getSolarNews() {
  const cachedNews = getCachedNews();
  if (cachedNews) {
    return cachedNews;
  }

  const news = await fetchNewsFromAPI();
  cacheNews(news);

  return news;
}

// Force refresh
export async function refreshNews() {
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(CACHE_TIMESTAMP_KEY);
  return getSolarNews();
}

// Get time until next update
export function getTimeUntilNextUpdate() {
  const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
  if (!timestamp) return 0;

  const nextUpdate = parseInt(timestamp) + CACHE_DURATION;
  return Math.max(0, nextUpdate - Date.now());
}