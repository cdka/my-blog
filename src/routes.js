import ShowBlogs from './components/ShowBlogs'
import AddBlogs from './components/AddBlog'
import SingleBlog from './components/SingleBlog'
import EditBlog from './components/EditBlog'

export default[
    {path:"/",component:ShowBlogs},
    {path:"/add",component:AddBlogs},
    {path:"/blog/:id",component:SingleBlog},
    {path:"/edit/:id",component:EditBlog},
]




