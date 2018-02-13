'use strict'

const Schema = use('Schema')

class TestSchema extends Schema {
  up () {
    this.create('tests', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('tests')
  }
}

module.exports = TestSchema
