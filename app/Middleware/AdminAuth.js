'use strict'

const adminMenus = [
    {
        title: '首页',
        children: [{
            title: '概况',
            router: 'admin.index'
        }]
    },
    {
        title: '博文管理',
        children: [{
            title: '查看博文',
            router: 'admin.blog.index'
        }, {
            title: '新建博文',
            router: 'admin.blog.create'
        }]
    }
]

class AdminAuth {
    async handle({ request, auth, response, view }, next) {
        console.log('AdminAuth')
        // console.log(request)
        // conso
        try {
            const user = await auth.getUser()
            // if (!user || user.username !== 'admin')
            //     // await response.route('admin.loginPage')
            // else 
            //     await next()
        } catch (error) {
            // console.log(error)
            // response.route('admin.loginPage')
            console.log('error')
            response.route('admin.loginPage')
            return
        }
        request.menus = adminMenus
        await next()
        // call next to advance the request
    }
}

module.exports = AdminAuth
