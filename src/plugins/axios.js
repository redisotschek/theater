import axios from 'axios';

export function createServer({path}) {
    return {
        url: path,
    };
}


export function createClient({ url }) {
    return axios.create({
        baseURL: url,
    });
}
