import axios from "axios";

const ACCESS_KEY = "YQ_yL-LQzjl6Sr0ymPf0zmir3fmTWR81QSVXvomwQP4";

export const requestPhotos = async () => {
    const { data } = await axios.get(`https://api.unsplash.com/photos`, {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
        },
    });
    return data;
};

export const requestPhotosByQuery = async (query) => {
       const { data } = await axios.get(`https://api.unsplash.com/search/photos?query=${query}`, {
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
          },
    });
    return data;
}