'use strict'

const Model = use('Model')

class Image extends Model {
    static get hidden (){
        return ['updated_at']
    }
}

module.exports = Image
