import 'babel-polyfill';
import fetch from 'cross-fetch';

const root_api = "http://localhost:3001";


const token = "ABUREADABLE1234";

const headers = {
    Accept: "application/json",
    Authorization: token,
    "Content-Type": "application/json"
};

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const FETCH_POSTS = "FETCH_POSTS";
export const UPVOTE_POST = "UPVOTE_POST";
export const DOWNVOTE_POST = "DOWNVOTE_POST";
export const SHOW_POST = "SHOW_POST";
export const FETCH_CATEGORY_POSTS ="FETCH_CATEGORY_POSTS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";



export function fetchCategories() {
    const request = fetch(`${root_api}/categories`, { headers });

    return (dispatch) => {
        request.then(response => response.json())
            .then(json => {
                dispatch({
                    type: FETCH_CATEGORIES,
                    payload: json
                })
            }).catch(error => console.log("Oh Yawsa! Request Failed: ", error));
    }
}

export function fetchPosts() {
    const request = fetch(`${root_api}/posts`, { headers });

    return (dispatch) => {
        request.then(response => response.json())
                .then(json => {
                    dispatch({
                        type: FETCH_POSTS,
                        payload: json
                    })
            }).catch(error => console.log("Oh Yawsa! Request Failed: ", error));
    } 
}

// export function fetchPosts() {
//     const request = fetch(`${root_api}/posts`, { headers });

//     return (dispatch) => {
//         request.then(response => response.json())
//             .then(posts => { console.log('posts received async ', Promise.all(posts.map(post => {
//                 return fetch(`${root_api}/posts/${post.id}/comments`, { headers })
//                         .then(res => res.json())
//                             .then(comments => post.comments = comments)
//                                 .then(() => post)}))
//                                     .then(posts => dispatch({
//                                         type: FETCH_POSTS,
//                                         payload: posts
//                                     }))
//             )})
//     }
// }

export function addPost(post){
    const request = fetch(`${root_api}/posts`, {
        method: "POST",
        headers,
        body: JSON.stringify(post)
    })
    return (dispatch) => {
        request.then(response => response.json())
            .then(json => {
                dispatch({
                    type: ADD_POST,
                    payload: json
                })
            }).catch(error => error);
    }
}

export function deletePost(id){
    const request = fetch(`${root_api}/posts/${id}`, {
        method: "DELETE",
        headers
    })
    return (dispatch) => {
        request.then(response => response.json())
            .then(json => {
                dispatch({
                    type: DELETE_POST,
                    payload: json
                })
            }).catch(error => console.log("Oh Yawsa! Request Failed: ", error));
    } 

}

export function upVote(id){
    const uVote = fetch(`${root_api}/posts/${id}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ option: "upVote" })
    })
       
    return (dispatch) => {
        uVote.then(response => response.json())
                .then(json => {
                    dispatch({
                        type: UPVOTE_POST,
                        payload: json
                    })
                }).catch(error => error);
    }
}

export function downVote(id) {
    const dVote = fetch(`${root_api}/posts/${id}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ option: "downVote" })
    })

    return (dispatch) => {
        dVote.then(response => response.json())
            .then(json => {
                dispatch({
                    type: DOWNVOTE_POST,
                    payload: json
                })
            }).catch(error => error);
    }
}

export function fetchPost(id) {
    const request = fetch(`${root_api}/posts/${id}`, { headers });
   
    return (dispatch) => {
        request.then(response => response.json())
            .then(json => {
                dispatch({
                    type: SHOW_POST,
                    payload: json
                })
            }).catch(error => console.log("Oh Yawsa! Request Failed: ", error));
    }
}

export function fetchCategoryPosts(category) {
    const request = fetch(`${root_api}/posts`, { headers });

    return (dispatch) => {
        request.then(response => response.json())
            .then(json => {
                console.log('payload from actions ',json);
                dispatch({
                    type: FETCH_CATEGORY_POSTS,
                    payload: json
                })
            }).catch(error => console.log("Oh Yawsa! Request Failed: ", error));
    }
}

export function fetchComments(postId){
    const request = fetch(`${root_api}/posts/${postId}/comments`, { headers })

    return (dispatch) => {
        request.then(response => response.json())
            .then(json => {
                console.log('payload comments from actions ', json);
                dispatch({
                    type: FETCH_COMMENTS,
                    payload: json
                })
            }).catch(error => console.log("Oh Yawsa! Request Failed: ", error));
    }
                
}

export function addComment({...comment}){
    const request = fetch(`${root_api}/comments/`, {
        method: "POST",
        headers,
        body: JSON.stringify({...comment})
    })
    return (dispatch) => {
        request.then(response => response.json())
            .then(json => {
                dispatch({
                    type: ADD_COMMENT,
                    payload: json
                })
            }).catch(error => error);
    }

}

