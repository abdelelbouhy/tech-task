import axios from 'axios';

export const clientApi = {
    addSnippet: (data) => {
        return axios(`user/login`, {
            method: 'POST',
            json: data,
        });
    },

    updateSnippet: () => {

        return axios.put(`user/logout`);
    },
};
