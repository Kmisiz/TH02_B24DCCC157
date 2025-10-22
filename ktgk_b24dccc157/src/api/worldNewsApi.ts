import axios from "axios";

const API_KEY = "74edacec763342038f439a516c379caa";
const BASE_URL = "https://api.worldnewsapi.com";

export interface NewsArticle {
  title: string;
  text: string;
  url: string;
  image: string;
  publish_date: string;
  source_country: string;
  source_name: string;
}

export async function getVietnamNews(): Promise<NewsArticle[]> {
  try {
    const res = await axios.get(`${BASE_URL}/search-news`, {
      params: {
        "source-countries": "vn",
        language: "vi",
        "api-key": API_KEY,
      },
    });
    return res.data.news;
  } catch (error: any) {
    throw new Error("Không thể lấy tin tức từ API.");
  }
}
