<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories">
                {{category}}
            </li>
        </ul>
        <button @click="deleteSingleBlog()">删除</button>
        <router-link :to="'/edit/' + id">编辑</router-link>
        
    </div>
</template>
<script>
export default {
    name:'single-blog',
    data () {
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created () {
        const query = Bmob.Query('vueBlogs');
        query.get(this.id).then(res => {
            console.log(res)
                this.blog = res;
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        deleteSingleBlog(){
            const query = Bmob.Query('vueBlogs');
            query.destroy(this.id).then(res => {
                console.log(res)
                this.$router.push({path:'/'})
            }).catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style scoped>
#single-blog {
    max-width: 960px;
    margin: 0 auto;
    padding:  20px;
    background: #eeeeee;
    border: 1px dotted #aaaaaa;


}
</style>
