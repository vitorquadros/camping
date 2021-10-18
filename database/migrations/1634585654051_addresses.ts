import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('state').notNullable();
      table.string('city').notNullable();
      table.string('street').notNullable();
      table.integer('street_number').notNullable();
      table.string('zip_code').notNullable();

      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
