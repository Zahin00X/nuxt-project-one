<template>
    <div class="admin-post-page">
        <section class="update-form">
            <admin-post-form :post="loadedPost" @submit="onSubmitted">

            </admin-post-form>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/admin/AdminPostForm'

export default {
    components:{
        AdminPostForm
    },
    layout: 'admin',
    asyncData(context)
    {
        return context.app.$axios.$get( process.env.baseUrl +'/posts/' + context.params.postId + '.json')
        .then( data => {
            return {
                loadedPost: { ...data, id: context.params.postId }
            }
        })
        .catch( e => context.error(e))
    },
    methods:{
        onSubmitted(editedPost)
        {
            this.$store.dispatch('editPost', editedPost)
            .then(()=>{
                this.$router.push('/admin');
            })
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