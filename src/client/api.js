import axios from 'axios';
import md5 from 'md5';

export const clientApi = {
    addSnippet: (data) => {
        const payload = {
            value: data,
            hash: md5(data),
        };

        return axios.post(`/addSnippet`, payload);
    },
};
