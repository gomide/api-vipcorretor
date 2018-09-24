'use strict'

const Schema = use('Schema')

class PropertySchema extends Schema {
  up () {
    this.create('properties', (table) => {
      table.increments()
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table
        .integer("owner_id")
        .unsigned()
        .references("id")
        .inTable("owners")
        .onUpdate("CASCADE")
        .onDelete("CASCADE") 
      table.string("descricao")
      table.integer("departamento")
      table.integer("id_proprietario")
      table.integer("id_captador")
      table.decimal("numeroAndar")
      table.decimal("preco")
      table.integer("numeroElevador")
      table.date("dataConstrucao")
      table.decimal("areaPrivativa")
      table.decimal("areaTotal")
      table.decimal("valorAgio")
      table.decimal("saldoDevedor")
      table.decimal("valorCondominio")
      table.boolean("permuta")
      table.dateTime("dataCadastro")
      table.integer("codigoAnuncio")
      table.string("endereco")
      table.string("cep")
      table.string("geolocalizacao")
      table.integer("situacao")
      table.integer("empresa")
      table.integer("tipo")
      table.integer("bairro")
      table.integer("regiao")
      table.timestamps()
    })
  }

  down () {
    this.drop('properties')
  }
}

module.exports = PropertySchema
