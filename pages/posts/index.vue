<template>
	<div class="posts-page">
        <post-list :posts="loadedPosts"></post-list>
	</div>
</template>

<script>

import PostList from '@/components/Posts/PostList'
	export default {
		components : {
			PostList
		},
		computed:{
      loadedPosts()
      {
        return this.$store.getters.loadedPosts;
      }
    },
  /*  created()
    {
      this.$store.dispatch('setPosts', this.loadedPosts)
      console.log(this.$store.getters.loadedPosts);
    } */
}
</script>

<style scoped>
    .posts-page {
        display : flex;
        justify-content: center;
        align-items: center;
    }


</style>