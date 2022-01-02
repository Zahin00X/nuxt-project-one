<template>
    <div class="admin-post-page">
        <section class="update-form">
            <admin-post-form :post="loadedPost">

            </admin-post-form>
        </section>
    </div>
</template>

<script>
import AdminPostForm from  '@/components/Admin/AdminPostForm.vue'

export default {

    components: {
        AdminPostForm
    },
    layout: 'admin',
    data()
    {
        return{
            loadedPost: {
                author: 'Maximillian',
                title: 'My awesome post',
                content: 'Super amazing, thanks for that!',
                thumbnailLink: 'https://assets.thehansindia.com/h-upload/2021/07/31/1092805-tech.webp'
            } 
        }
    }

}
</script>

<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>