import axios, {AxiosResponse} from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 3000;

export const getRequest = <T>(url: string): () => Promise<AxiosResponse<T>> => {
    return () => axios.get(url);
};

export const postJsonRequest = <T>(url: string, data: JSON): Promise<AxiosResponse<T>> => {
    const requestConfig = {
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    };

    return axios.post(url, data, requestConfig);
};

export const postFormRequest = <T>(url: string, data: FormData): Promise<AxiosResponse<T>> => {
    return axios.post(url, data)
};
