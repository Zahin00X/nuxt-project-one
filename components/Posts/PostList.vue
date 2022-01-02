<template>
    <section class="post-list">
        <PostPreview
			:is-admin="isAdmin"
	        id="1"
	        thumbnail="https://news.cgtn.com/news/2020-11-02/Analysis-China-is-betting-on-science-and-tech-like-never-before-V68V871ula/img/871ca9ce8b9941088260b6ed4ced4eeb/871ca9ce8b9941088260b6ed4ced4eeb.jpeg"
	        title="Hello There 1!"
	        previewText="This is my first post!"	
  	    />
        <PostPreview
	        id="2"
	        thumbnail="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F930116744%2F960x0.jpg%3Ffit%3Dscale"
	        title="Hello There 2!"
	        previewText="This is my second post!"	
	    />
        <PostPreview
	        id="3"
	        thumbnail="https://www.acquisition-international.com/wp-content/uploads/2020/01/tech-cruve.jpg"
	        title="Hello There 3!"
	        previewText="This is my third post!"	
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