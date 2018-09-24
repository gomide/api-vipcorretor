'use strict'

const Model = use('Model')

class Property extends Model {
    static get hidden (){
        return ['updated_at']
    }
    images () {
        return this.hasMany('App/Models/Image')
    }
    owners () {
        return this.belongsTo('App/Models/Owner')
    }
    feedbacks () {
        return this.hasMany('App/Models/Feedback')
    }
    users () {
        return this.belongsTo('App/Models/User')
    }

}

module.exports = Property
