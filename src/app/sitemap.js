export default function sitemap() {
  const baseUrl = "https://digitalmarketingnearby.com";
  const currentDate = new Date().toISOString();

  // Core Landing Page & Section URLs
  const corePages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#why-choose-us`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#process`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#industries`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // City-Wise Targeted Indexing for Google Local & Pan-India Search
  const targetCities = [
    // 1. Primary Focus: Noida & Delhi NCR
    { slug: "noida", priority: 1.0, changeFrequency: "daily" },
    { slug: "greater-noida", priority: 0.95, changeFrequency: "daily" },
    { slug: "noida-extension", priority: 0.95, changeFrequency: "weekly" },
    { slug: "delhi-ncr", priority: 0.95, changeFrequency: "daily" },
    { slug: "delhi", priority: 0.9, changeFrequency: "weekly" },
    { slug: "gurgaon", priority: 0.9, changeFrequency: "weekly" },
    { slug: "ghaziabad", priority: 0.9, changeFrequency: "weekly" },
    { slug: "indirapuram", priority: 0.85, changeFrequency: "weekly" },
    { slug: "faridabad", priority: 0.85, changeFrequency: "weekly" },

    // 2. Major Metros & Business Hubs Across India
    { slug: "mumbai", priority: 0.85, changeFrequency: "weekly" },
    { slug: "bangalore", priority: 0.85, changeFrequency: "weekly" },
    { slug: "pune", priority: 0.85, changeFrequency: "weekly" },
    { slug: "hyderabad", priority: 0.85, changeFrequency: "weekly" },
    { slug: "ahmedabad", priority: 0.8, changeFrequency: "weekly" },
    { slug: "kolkata", priority: 0.8, changeFrequency: "weekly" },
    { slug: "chennai", priority: 0.8, changeFrequency: "weekly" },
    { slug: "lucknow", priority: 0.85, changeFrequency: "weekly" },
    { slug: "jaipur", priority: 0.8, changeFrequency: "weekly" },
    { slug: "chandigarh", priority: 0.8, changeFrequency: "weekly" },
  ];

  const cityPages = targetCities.map((city) => ({
    url: `${baseUrl}/?city=${city.slug}`,
    lastModified: currentDate,
    changeFrequency: city.changeFrequency,
    priority: city.priority,
  }));

  return [...corePages, ...cityPages];
}

