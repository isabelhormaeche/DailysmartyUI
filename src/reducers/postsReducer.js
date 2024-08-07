import {
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
} from '../actions/types';

const INIT_STATE = {
    resultsPosts: [],
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

        case SET_RESULTS_POSTS:
            const resultsPosts = action.payload;
            // return an object
            return {
                    ...state, 
                    resultsPosts
                }
        default:
            return state;
    }
}
//postsReducer updates the status with recent posts when the SET_RECENT_POSTS action is dispatched.