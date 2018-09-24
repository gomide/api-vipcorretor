'use strict'

const Model = use('Model')

class Owner extends Model {
    properties () {
        return this.hasMany('App/Models/Property')
    }

}

module.exports = Owner
