<template>
    <section class="post-list">
        <PostPreview
			v-for="post in posts"
			:key="post.id"
			:is-admin="isAdmin"
	        :id="post.id"
	        :thumbnail="post.thumbnail"
	        :title="post.title"
	        :previewText="post.previewText "	
  	    />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'
	export default {
		components : {
			PostPreview
		},
		props: {
			isAdmin : {
				type : Boolean,
				required : false
			},
			posts : {
				type : Array,
				required : true
			}
		}

	}
</script>

<style>
    .post-list {
 	display: flex;
  	padding: 20px;
  	box-sizing: border-box;
  	flex-wrap: wrap;
  	align-items: center;
  	justify-content: center;
}
</style>