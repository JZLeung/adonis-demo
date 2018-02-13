'use strict'

// const Model = use('Model')
const BaseModel = use('./Base')

class Blog extends BaseModel {
    static get primaryKey() {
        return 'id'
    }
    static get dates () {
        return super.dates.concat(['edited_at'])
    }
}

module.exports = Blog
