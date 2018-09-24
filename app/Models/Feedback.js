'use strict'

const Model = use('Model')

class Feedback extends Model {
    users () {
        return this.hasMany('App/Models/User')
    }
}

module.exports = Feedback
