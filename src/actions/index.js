import axios from 'axios';

export const DELETE_POST_ACTION = 'DELETE_POST';
export const FETCH_BLOG_POST = 'FETCH_BLOG_POST';
export const FETCH_BLOG_LIST = 'FETCH_BLOG_LIST';
export const SAVE_POST = 'SAVE_POST';

const BASE_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=CASS123';

export function deleteAction(payload, callback) {

    callback = callback || function () { };
    
    const request = axios.delete(`${BASE_URL}/posts/${payload}${API_KEY}`).then(() => callback());

    return {
        type: DELETE_POST_ACTION,
        payload: payload
    };
}

export function fetchBlogPost(payload) {
    const request = axios.get(`${BASE_URL}/posts/${payload}${API_KEY}`);

    return {
        type: FETCH_BLOG_POST,
        payload: request
    }
}

export function fetchBlogList() {
    const request = axios.get(`${BASE_URL}/posts${API_KEY}`);

    return {
        type: FETCH_BLOG_LIST,
        payload: request
    }
}

export function savePost(payload, callback) {
    callback = callback || function () { };
    
    const request = axios.post(`${BASE_URL}/posts${API_KEY}`, payload).then(() => callback());

    return {
        type: SAVE_POST,
        payload: request
    }
}