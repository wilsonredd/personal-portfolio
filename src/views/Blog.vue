<template>
<div class="wrapper">
    <h1>My Blog</h1>
    <div class="blogs">
        <div class="blog-post" v-for="post in blog_posts" :key="post.id">
            <img :src="'/images/'+ post.image" alt="">
            <div class="description">
                <h1>{{post.title}}</h1>
                <p>{{post.date}}</p>
                <div class="tags">
                    <p v-for="tag in post.tags" :key="tag.id">{{ tag.tag }}</p>
                </div>
                <p>{{post.description}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Blog',
    computed: {
        blog_posts() {
            return this.$root.$data.blog;
        }
    },
}
</script>

<style scoped>
.wrapper {
    padding: 0px 10px 0px 10px;
    font-family: 'Lato', sans-serif;
}

.wrapper>h1 {
    text-align: center;
}

.blogs {
    display: flex;
    flex-direction: column;
}

h1 {
    font-size: 32px;
    font-family: 'Raleway', sans-serif;
}

.blog-post {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid #ddd;
    /* margin: 0; */
}

.blog-post:last-of-type {
    border-bottom: none;
}

.blog-post img {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 300px;
}

.description {
    display: flex;
    flex-direction: column;
}

.description p {
    margin: 0;
}

.tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5px 0px 5px 0px;
    justify-content: center;
    align-items: center;
}

.tags>p {
    margin-right: 5px;
    padding: 0px 5px 0px 5px;
    text-align: center;
    border-radius: 5%;
    border: 2px solid #EDE576;
}

@media only screen and (min-width: 901px) {
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 700px;
        margin: 0 auto;
    }

    .blog-post {
        flex-direction: row;

    }

    .description {
        margin-left: 10px;
    }

    .description h1 {
        font-size: 24px;
    }
}
</style>
