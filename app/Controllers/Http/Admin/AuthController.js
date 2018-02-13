'use strict'

const User = use('App/Models/User')

class AdminAuthController {
    async login({request, auth, view, response}) {
        const {username, password} = request.all()
        console.log(username, password)
        const user = await User.query().where({username}).first()
        if (user && user.uid) {
            await auth.remember(true).attempt(user.uid, password)
            return response.route('admin.index')
        // } else {
        //     return view.render('admin.login', {error: '用户不存在或密码错误'})
        }
    }

    async logout({response, auth}) {
        await auth.logout()
        return response.route('admin.login')
    }
}

module.exports = AdminAuthController
