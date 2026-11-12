import axios from "axios";
import { getFallbackData } from "./fallbackData.js";

export const baseUrl = process.env.NEXT_PUBLIC_RAPID_API_URL || 'https://bayut.p.rapidapi.com';
export const apiHost = process.env.NEXT_PUBLIC_RAPID_API_HOST || 'bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const apiKey = process.env.NEXT_PUBLIC_RAPID_API_KEY || 'd0d71b7c18msh7b53cd5d0677e52p109301jsnea280dc0e48e';

    try {
        const { data } = await axios.get(url, {
            headers: {
                'x-rapidapi-host': apiHost,
                'x-rapidapi-key': apiKey
            },
            timeout: 5000
        });

        if (data && (data.hits || data.price || data.externalID || Array.isArray(data))) {
            return data;
        }

        return getFallbackData(url);
    } catch (error) {
        console.warn(`[Grandview-Properties] RapidAPI (${url}) returned ${error.response?.status || error.message}. Using built-in fallback data.`);
        return getFallbackData(url);
    }
};
