<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <section class="featured-post">
      <post-list :posts="loadedPosts"></post-list>
    </section>
  </div>
</template>
 
<script>
import PostList from "@/components/Posts/PostList"
  export default {
    components: {
      PostList
    },
    data()
    {
      return{
        loadedPosts: [
          {
            id: '1',
            title: 'My awesome post',
            previewText:'Super amazing, thanks for that!',
            thumbnail: 'https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg'
          },
          {
            id: '2',
            title: 'My cool post',
            previewText:'Yes! It is cool!',
            thumbnail: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F930116744%2F960x0.jpg%3Ffit%3Dscale'
          },
          {
            id: '3',
            title: 'My rad post',
            previewText:'Yes! It is rad!',
            thumbnail: 'https://www.acquisition-international.com/wp-content/uploads/2020/01/tech-cruve.jpg'
          }

        ]
      }
    }
  }

</script>


<style scoped>

.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/main-page-background.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-post {
 	display: flex;
  	padding: 20px;
  	box-sizing: border-box;
  	flex-wrap: wrap;
  	align-items: center;
  	justify-content: center;
}

</style>