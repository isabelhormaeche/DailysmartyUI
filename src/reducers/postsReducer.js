import {
    SET_RECENT_POSTS
} from '../actions/types';

const INIT_STATE = {
    posts: [],
    recentPosts: []
}

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SET_RECENT_POSTS:
            const recentPosts = action.payload;
            // return an object
            return {
                    ...state, 
                    recentPosts
                }
        default:
            return state;
    }
}
//postsReducer updates the status with recent posts when the SET_RECENT_POSTS action is dispatched.