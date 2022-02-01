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
            },
            addPost(state, post)
            {
                state.loadedPosts.push(post);
            },
            editPost(state, editedPost)
            {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                    )
                state.loadedPosts[postIndex] = editedPost;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context)
            {
                return context.app.$axios.$get('/posts.json')
                .then( data => {
                    const postsArray = [];
                    for(const key in data){
                        postsArray.push({ ...data[key], id: key })
                    }
                    vuexContext.commit('setPost', postsArray)
                })
                .catch( e => context.error)
            }, 
            setPost(vuexContext, post)
            {
                vuexContext.commit("setPost", post);
            },
            addPost(vuexContext, post)
            {
                const createdPost = {
                    ...post, updatedDate: new Date()
                }
                return this.$axios.$post('https://nuxt-blog-af5c6-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
                createdPost)
                .then(data => {
                vuexContext.commit('addPost', { ...createdPost, id: data.name})
                })
                .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost)
            {
                editedPost.updatedDate = new Date();
                return this.$axios.$put('https://nuxt-blog-af5c6-default-rtdb.asia-southeast1.firebasedatabase.app/posts/' + editedPost.id + '.json', editedPost)
                .then( res => {
                vuexContext.commit('editPost', editedPost)
                })
                .catch(e => console.log(e))
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