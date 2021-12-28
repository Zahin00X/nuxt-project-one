<template>
    <nuxt-link :to=" '/posts/' + 1" class="post-preview">
      <article>
        <div class="post-thumbnail" style="background-image: url('https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg')"></div>
        <div class="post-content"></div>
        <div class="post-content">
          <h1>post title 1</h1>
          <p>Preview Text 1</p>
        </div>
      </article>
    </nuxt-link>
</template>

<style scoped>
    .post-preview {
        border: 1px solid #ccc;
        box-shadow: 0 2px 2px #ccc;
        background-color: white;
        width: 90%;
      }
      
      a {
        text-decoration: none;
        color: black;
      }
      
      @media (min-width: 850px) {
        .post-preview {
          width: 400px;
          margin: 10px;
        }
      }
      
      .post-thumbnail {
        width: 100%;
        height: 200px;
        background-position: center;
        background-size: cover;
      }
      
      .post-content {
        padding: 10px;
        text-align: center;
      }
      
      a:hover .post-content,
      a:active .post-content {
        background-color: #ccc;
      }
</style>