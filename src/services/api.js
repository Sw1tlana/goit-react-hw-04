import axios from "axios";

const ACCESS_KEY = "Y8OVY-DAIGWWhP7Nmp122SVKSdogm4qGsG1ERWLS_D0";
export const requestPhoto = async (searchQuery, page = 1, perPage = 12) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${searchQuery}`, {
        headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`
        },
            params: {
            query: searchQuery,
            page: page,
            per_page: perPage
        }
    });
    return response.data.results;
}