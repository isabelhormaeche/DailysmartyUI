import { 
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
 } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get("https://swapi.dev/api/people/")
                
        .then(response => {
            console.log("response data fetchRecentPosts", response.data.results);
            dispatch({
            type: SET_RECENT_POSTS,
            payload: response.data.results
            })
        })

    }
}

export function fetchPostsWithQuery(query) {
    return function(dispatch) {
        axios.get(`https://swapi.dev/api/people/?search=${query}`)
                
        .then(response => {
            console.log("index response data fetchPostsWithQuery", response.data.results);
              dispatch({
              type: SET_RESULTS_POSTS,
              payload: response.data.results
              })
        })

    }
}