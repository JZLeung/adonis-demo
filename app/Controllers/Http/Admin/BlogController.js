'use strict'

 const Blog = use('App/Models/Blog')

class AdminBlogController {
    async index({view, request}) {
        const query = request.get()
        const page = query.page || 1
        const allBlogs = await Blog.query().paginate(page)
        // console.log(query, allBlogs)
        return view.render('admin.blog.index')
    }
}

module.exports = AdminBlogController
