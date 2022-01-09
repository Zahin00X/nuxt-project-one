<template>
    <div class="admin-page">
        <section class="new-post">
            <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
        </section>
        <section class="existing-posts"></section>
        <h1>Existing Posts</h1>
        <post-list isAdmin=true :posts="loadedPosts"></post-list>
    </div>
</template>

<script>
import PostList from "@/components/Posts/PostList"
import AppButton from "@/components/UI/AppButton"
    export default {
        layout: 'admin',
        components: {
            PostList,
            AppButton
        },
        computed: {
          loadedPosts()
          {
              return this.$store.getters.loadedPosts;
          }

    }


    }
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>

