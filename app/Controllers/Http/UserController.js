'use strict'

const User = use('App/Models/User')

class UserController {
    async login({request, auth}) {
        const {username, password} = request.all()
        console.log(username, password)
        const user = await User.query().where({username}).first()
        console.log(user.uid)
        const result = await auth.remember(true).attempt(user.uid, password)
        return 'hahaha'
    }
    async regist({request}) {
        // const {username, password} = request.all()
        const userData = request.only(['username', 'password', 'email'])
        const newUser = await User.create(userData)
        return newUser.toJSON()
    }
    async logout({auth}) {
        await auth.logout()
        return 'ok'
    }
    async check({auth}) {
        try {
            await auth.check()
        } catch (error) {
            return 'You are not logged in'
        }
        return 'You are logged in'
    }
}

module.exports = UserController
