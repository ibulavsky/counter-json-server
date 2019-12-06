import axios from 'axios'


const instance = axios.create(
    {
        baseURL: "http://localhost:4000/"
    }
);

export interface ICounter {
    value: number
}


export const api = {
    async increment(delta: number) {
        // console.log(delta)
        let response = await instance.get<ICounter>('counter');
        response = await instance
            .put<ICounter>('counter', {value: response.data.value + delta});
        // return response.data;
    },
    async reset() {
        let response = await instance.put<ICounter>('counter', {value: 0});
        return response.data;
    },
    async getCounter() {
        let response = await instance.get<ICounter>('counter');
        // console.log(response);
        return response.data;
    }
};


