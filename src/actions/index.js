import { SET_RECENT_POSTS } from './types';

import axios from 'axios';

export function fetchRecentPosts() {
    return function(dispatch) {
        // DISPATCH--> A "messenger" to send API request to the Redux store, 
        // which then updates the state with the response data.
        
        //Perform our request in here.
        //console.log("hello");

        //axios.get('https://api.dailysmarty.com/posts') ---> The guide´s api is down. I use Swapi API "https://swapi.dev/api/" instead.
        axios.get("https://swapi.dev/api/films/")
        //axios.get("https://swapi.dev/api/planets/") 
                
        .then(response => {
            console.log("response data fetchRecentPosts", response.data.results);
            dispatch({
            type: SET_RECENT_POSTS,
            payload: response.data.results
            })
        })
        


    }
}