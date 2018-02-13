'use strict'

// const Database = use('Database')
const Blog = use('App/Models/Blog')

class BlogController {
    getBlogs() {
        return Database.table('blog_posts').select('*')
    }
    async index() {
        // return Database.table('blogs').select('*')
        const blogs = await Blog.query().paginate(1)
        console.log(blogs)
        return blogs
    }
    create({view}) {
        // return 'Blog.create'
        return view.render('blog.create')
    }
    async store({request}) {
        console.log(request.body)
        const blogData = request.only(['title', 'summary', 'content'])
        if (!blogData.summary) blogData.summary = blogData.content.substr(0, 120)
        const newBlog = await Blog.create(blogData)
        // const blog = new Blog(request.body)
        console.log(newBlog)
        return newBlog.toJSON()
    }
    async show({params}) {
        // const query = request.all()
        console.log(params)
        let curBlog = await Blog.find(params.id)
        curBlog.views += 1
        curBlog.save()
        return curBlog
    }
    async update({request, params}) {
        // console.log(request.all(), params)
        let blog = await Blog.findOrFail(params.id)
        console.log(blog)
        const updateData = request.only(['title', 'content', 'summary', 'views', 'comments', 'likes'])
        blog.merge(updateData)
        blog.merge({edited_at: new Date()})

        // const {title, content} = request.all()
        // blog.title = title
        // blog.content = content
        await blog.save()
        // blog.updated_at:
        return blog.toJSON()
    }
}

module.exports = BlogController
