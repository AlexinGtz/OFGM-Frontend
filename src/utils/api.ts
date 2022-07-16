import axios, { AxiosInstance } from "axios";

export class API {
    client: AxiosInstance;

    constructor() {
        const baseURL = 'https://sgct180v33.execute-api.us-east-1.amazonaws.com/qa'
        // const baseURL = 'https://0req57xjz5.execute-api.us-east-1.amazonaws.com/prod'
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