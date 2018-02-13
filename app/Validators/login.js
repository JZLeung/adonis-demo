'use strict'

class login {
    get rules() {
        // console.log('rules')
        return {
            // email: 'required|email|unique:users',
            password: 'required',
            username: 'required'
            // validation rules
        }
    }

    get messages() {
        console.log('messages')
        return {
            // 'email.required': '请输入邮箱',
            // 'email.email': '请输入正确的邮箱地址',
            // 'email.unique': '该邮箱已被占用',
            'password.required': '请输入密码',
            'username.required': '请输入用户名',
            // 'username.unique': '该用户名已被占用',
        }
    }

    get validateAll() {
        return true
    }
}

module.exports = login
