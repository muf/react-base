import axios, {AxiosResponse} from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 3000;

export async const getReqeust = <T>(url: string): Promise<AxiosResponse<T>> => {
    return axios.get(url);
};

export async const postJsonRequest = <T>(url: string, data: JSON): Promise<AxiosResponse<T>> => {
    const requestConfig = {
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    };

    return axios.post(url, data, requestConfig);
};

export async const postFormRequest = <T>(url: string, data: FormData): Promise<AxiosResponse<T>> => {
    return axios.post(url, data)
};
