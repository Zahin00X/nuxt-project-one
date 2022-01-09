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
            nuxtServerInit(vuexContext, context)
            {
                return new Promise((resolve, reject) =>{
                    setTimeout(()=>{

                        vuexContext.commit('setPost', [
                            {
                              id:"1",
                              title: "First Post",
                              previewText: "This is our first post",
                              thumbnail: "https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"
                            },
                            {
                              id:"2",
                              title: "Second Post",
                              previewText: "This is our second post",
                              thumbnail: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F930116744%2F960x0.jpg%3Ffit%3Dscale"
                            },
                            {
                              id:"3",
                              title: "Third Post",
                              previewText: "This is our third post",
                              thumbnail: "https://www.acquisition-international.com/wp-content/uploads/2020/01/tech-cruve.jpg"
                            }

                          ])
                        
                        
                          resolve();
                    } ,1000)
                    }) 
                    
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