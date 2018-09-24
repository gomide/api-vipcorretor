'use strict'

const Schema = use('Schema')

class FeedbackSchema extends Schema {
  up () {
    this.create('feedbacks', (table) => {
      table.increments()
      table
      .integer("property_id")
      .unsigned()
      .references("id")
      .inTable("properties")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      table
      .integer("user_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE")
      table.text("comentario")
      table.timestamps()
    })
  }

  down () {
    this.drop('feedbacks')
  }
}

module.exports = FeedbackSchema
