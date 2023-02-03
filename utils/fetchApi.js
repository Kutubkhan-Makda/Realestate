import axios from "axios";

export const BaseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_RAPID_API_KEY,
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}