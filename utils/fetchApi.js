import axios from "axios";

export const BaseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '7e56f3663bmsh9cab74bf04c9828p1b0d38jsn0fe9bdc90444',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}