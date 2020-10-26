<template>
    <div>
        <h1 class="title is-2 has-text-weight-light has-text-centered title-top">
            {{post.title}}
        </h1>
        <div class="content" v-html="post.body_html" />
    </div>
</template>

<script>
    export default {
        name: "Post",
        data: () => ({
            post: {},
        }),
        mounted() {
            this.fetchPost(this.$singlePostUrl+this.$route.params.slug);
        },
        methods: {
            fetchPost(url) {
                this.$axios.get(url)
                    .then(res => res.data)
                    .then(res => {
                        this.post = res;
                        console.log(this.post);
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

    .highlight__panel {
        display: none;
    }
</style>