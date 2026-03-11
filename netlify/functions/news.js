export async function handler() {
  try {
    const API_KEY = process.env.GNEWS_API_KEY;

    const url = `https://gnews.io/api/v4/search?q=solar%20energy&lang=en&max=12&apikey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch news" })
    };
  }
}