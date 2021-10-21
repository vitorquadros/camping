import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class ToursLocations extends BaseSchema {
  protected tableName = 'tours_locations';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('location_name').notNullable();
      table
        .integer('address_id')
        .unsigned()
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('coordinates_id')
        .unsigned()
        .references('id')
        .inTable('locations_coordinates')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
