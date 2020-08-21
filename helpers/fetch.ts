import axios from 'axios';
import {getPageData} from './queries';
import {PageNames} from "../shared/enums/page-names.enum";

function Fetcher (pageName: PageNames) {
    return axios({
        url: `${process.env.CMS_URL}/graphql`,
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
