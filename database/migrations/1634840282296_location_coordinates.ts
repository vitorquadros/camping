import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class LocationCoordinates extends BaseSchema {
  protected tableName = 'location_coordinates';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.decimal('latitude', 8, 6);
      table.decimal('longitude', 9, 6);

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
