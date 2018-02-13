'use strict'
// import moment from 'moment'
const moment = require('moment')
const Model = use('Model')

class Base extends Model {
    static scopeNew(query) {
        const time = new Date(new Date().toLocaleDateString())
        const today = moment(time).format('YYYY-MM-DD')
        // console.log(today)
        // const one = query.where('created_at', '>=', today)
        // console.log(one.toString())
        return query.where('created_at', '>=', today)
    }
}

module.exports = Base
