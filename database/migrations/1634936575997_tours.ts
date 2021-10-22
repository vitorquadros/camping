import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Tours extends BaseSchema {
  protected tableName = 'tours';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('slug').notNullable();
      table.text('description').notNullable();
      table.boolean('private').defaultTo(false);
      table
        .enum('difficulty', ['easy', 'experient', 'expert'], {
          useNative: true,
          enumName: 'tour_difficulties'
        })
        .notNullable();
      table.integer('duration').notNullable();
      table.integer('max_group_size').notNullable();
      table.decimal('price', 10, 2).notNullable();
      table
        .integer('start_location_id')
        .unsigned()
        .references('id')
        .inTable('tours_locations')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.datetime('start_date').notNullable();

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
    this.schema.raw('DROP TYPE IF EXISTS "tour_difficulties"');
  }
}
