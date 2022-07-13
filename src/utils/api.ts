import axios, { AxiosInstance } from "axios";

export class API {
    client: AxiosInstance;

    constructor() {
        const baseURL = process.env.NODE_ENV === 'development' ? 
            'https://sgct180v33.execute-api.us-east-1.amazonaws.com/qa' 
            : '';
        this.client = axios.create({
            baseURL,
            timeout: 10000,
        })
    }

    async post(url: string, data: Object) {
        return (await this.client.post(url, data)).data
    }

    async get(url: string) {
        return (await this.client.get(url)).data
    }
}