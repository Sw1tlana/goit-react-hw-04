import axios from "axios";

const ACCESS_KEY = "YQ_yL-LQzjl6Sr0ymPf0zmir3fmTWR81QSVXvomwQP4";
     
export const requestPhotosByQuery = async (query, page = 1) => {
       const { data } = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&page=${page}`, {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
        },
    });
return data.results;
}