<template>
    <div>
        <h1 class="title is-2 has-text-weight-light has-text-centered title-top">
            Blog
        </h1>
        <div class="columns is-multiline posts">
            <div v-for="post in posts" v-bind:key="post.id" class="card column is-6 is-12-mobile">
                <div class="card-image">
                    <figure class="image">
                        <img :src="post.cover_image" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p><a class="title is-4" target="_blank" :href="post.url">{{post.title}}</a></p>
                            <time>Published {{post.readable_publish_date}}</time> ·
                            <span class="subtitle is-6">{{post.public_reactions_count}} Reactions</span> ·
                            <span class="subtitle is-6">{{post.comments_count}} Comments</span>
                        </div>
                    </div>

                    <div class="content">
                        {{post.description}}
                        <br>
                        <a href="#" v-for="tag in post.tag_list" v-bind:key="tag">#{{tag}} </a>&nbsp;
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        data: () => ({
            url: 'https://dev.to/api/articles?username=moghwan',
            posts: {},
        }),
        mounted() {
            this.fetchPosts(this.url)
        },
        methods: {
            fetchPosts(url) {
                this.$axios.get(url)
                    .then(res => res.data)
                    .then(res => {
                        this.posts = res;
                        console.log(this.posts);
                    })
                    .catch(err => console.log(err));
            },
        }
    }
</script>

<style scoped>
    .title-top {
        margin-top: 1.5rem
    }

    .posts {
        margin-bottom: 20px;
        margin-top: 20px;
    }
</style>