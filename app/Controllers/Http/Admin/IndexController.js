'use strict'

const User = use('App/Models/User')
const Blog = use('App/Models/Blog')


class AdminIndexController {
    async index({view}) {
        const users = await User.all()
        const blogs = await Blog.all()

        const newUsers = await User.query().new()
        console.log(newUsers)
        return view.render('admin.index', {
            users: users.toJSON(),
            blogs: blogs.toJSON(),
            newUsers
        })
    }
}

module.exports = AdminIndexController
