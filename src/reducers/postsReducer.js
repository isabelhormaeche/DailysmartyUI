import {
    SET_RECENT_POSTS
} from '../actions/types';

const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (action.types) {
        case SET_RECENT_POSTS:
            
            return [...state]
    
        default:
            return state;
    }
}