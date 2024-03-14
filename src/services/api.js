import axios from "axios";

const ACCESS_KEY = "YQ_yL-LQzjl6Sr0ymPf0zmir3fmTWR81QSVXvomwQP4";
export const requestPhoto = async () => {
    const response = await axios.get('https://api.unsplash.com/photos', {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
        }
    });
    return response.data;
}

export const requestPhotoSearch = async (searchQuery, page = 1, perPage = 12) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?&query=${searchQuery}`, {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
        },
        params: {
            query: searchQuery,
            page,
            per_page: perPage
        }
    });
    return response.data;
}