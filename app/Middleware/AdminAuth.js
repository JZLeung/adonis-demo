'use strict'

class AdminAuth {
    async handle({ request, auth, response }, next) {
        console.log('AdminAuth')
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
        await next()
        // call next to advance the request
    }
}

module.exports = AdminAuth
