'use strict'

const Schema = use('Schema')

class OwnerSchema extends Schema {
  up () {
    this.create('owners', (table) => {
      table.increments()
      table.string("nome")
      table.string("cpfCnpj")
      table.string("telefone")
      table.integer("tipoPessoa")
      table.timestamps()
    })
  }

  down () {
    this.drop('owners')
  }
}

module.exports = OwnerSchema
