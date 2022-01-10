import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPosts : []
        },
        mutations:{
            setPost(state, post)
            {
                state.loadedPosts = post;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context)
            {
                return axios.get('https://nuxt-blog-af5c6-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
                .then( res => {
                    const postsArray = [];
                    for(const key in res.data){
                        postsArray.push({ ...res.data[key], id: key })
                    }
                    vuexContext.commit('setPost', postsArray)
                })
                .catch( e => context.error)
            }, 
            setPost(vuexContext, post)
            {
                vuexContext.commit("setPost", post);
            }
        },
        getters:{
            loadedPosts(state)
            {
                return state.loadedPosts;
            }

        }
    })
}

export default createStore;