'use strict'

const Model = use('Model')

class Blog extends Model {
    static get primaryKey() {
        return 'id'
    }
    static get dates () {
        return super.dates.concat(['edited_at'])
    }
}

module.exports = Blog
