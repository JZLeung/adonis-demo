'use strict'

const Schema = use('Schema')

class BlogSchema extends Schema {
  up () {
    this.create('blogs', (table) => {
      table.increments('id')
      table.string('title', 80)
      table.string('summary', 120)
      table.text('content')
      table.integer('likes').defaultTo(0)
      table.integer('views').defaultTo(0)
      table.integer('comments').defaultTo(0)
      // table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('edited_at').defaultTo(this.fn.now())
      table.timestamps()
    })
  }

  down () {
    this.drop('blogs')
  }
}

module.exports = BlogSchema
