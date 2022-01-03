import Vuex from 'vuex'

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