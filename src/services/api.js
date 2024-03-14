import axios from "axios";

const ACCESS_KEY = "Y8OVY-DAIGWWhP7Nmp122SVKSdogm4qGsG1ERWLS_D0";
export const requestPhoto = async () => {
    const response = await axios.get('https://api.unsplash.com/photos', {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
        }
    });
    return response.data;
}

export const requestPhotoSearch = async (searchQuery, page = 1, perPage = 10) => {
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