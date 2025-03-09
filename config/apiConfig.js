import axios from "axios";
import API_URLS from "./apiUrls";

/*** 
 * @returns api urls to interact with the backend 
 *
 **/
const createAPI = (backend = "node_api") => {
    const baseURL = API_URLS[backend];

    if (!baseURL) {
        throw new Error(`Invalid backend api url: ${backend}`);
    }

    return axios.create({
        baseURL,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    });
};


//base_url for endpoints in the payment processing and payment gateway
export const nodeAPI = createAPI("node_api");

export const djangoAPI = createAPI("django_api");

//URL for wallet & transaction under User Dashboard
export const csharpAPI = createAPI("csharp_api");

//export default createAPI; //this can be activate if there's need to create more dynamic api url outside this file.