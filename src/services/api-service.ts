import axios from "axios";

const http = axios.create({ baseURL: 'https://randomuser.me/' });
http.interceptors.request.use(request => {
    request.params = { results: 10 }
    // show loader if any
    return request;
});
http.interceptors.response.use(response => {
    // hide loader
    return response;
});

const httpCanel = axios.CancelToken.source();

export { http, httpCanel };