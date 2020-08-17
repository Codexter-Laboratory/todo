import axios from 'axios';
import {getPageData} from './queries';

function Fetcher (pageName: string) {
    return axios({
        url: 'http://localhost:1337/graphql',
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify({
            query: getPageData(pageName)
        })
    });
}

export {Fetcher};