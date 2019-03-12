<template>
    <div v-theme:column="'naroow'" id="show-blogs">
        <h1>博客总览</h1>
        <input type="text" v-model="seach" placeholder="请输入你要搜索内容">
        <div class="single-blog" v-for="blog in filteredBlogs">
            <router-link v-bind:to="'/blog/' + blog.objectId">

                <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
                <article>
                    {{blog.content | snippet}}
                </article>

            </router-link>
        </div>
        <br><br>
        
    </div>
</template>

<script>


export default {
    name: 'show-blogs',
    data () {
        return {
            blogs:[],
            seach:""
        }
    },
    created() {

        const query = Bmob.Query('vueBlogs');
        query.find().then(res => {
            console.log(res)
            this.blogs = res.slice(0,10)

        }).catch(err => {
            console.log(err)
        })
    },
    computed: {
        filteredBlogs:function(){
            return this.blogs.filter((blogs) => {
                return blogs.title.match(this.seach);
            })
        }
    },
    filters: {
        toUppercase: function(value){
            return value.toUpperCase(); 
        },
        snippet: function(value){
            if(value.length > 100){
                return value.slice(0,100) + "...";
            }else{
                return value
            }
            
        }
    },
    directives: {
        rainbow: {
            bind:function(el, binding,vnode){
                el.style.color = '#' + Math.random().toString(16).slice(2,8);
                //console.log('#' + Math.random().toString(16).slice(2,8))
            }
        }
        
    }
}

</script>


<style>
#show-blogs{
	max-width: 800px;
	margin: 0 auto;
}

.single-blog{
	padding: 20px;
	margin: 20px 0;
	box-sizing: border-box;
	background: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a{
  color: #444;
  text-decoration: none;
}

input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}


</style>