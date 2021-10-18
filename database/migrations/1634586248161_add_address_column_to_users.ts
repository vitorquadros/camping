import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class AddAddressColumnToUsers extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.table(this.tableName, (table) => {
      table
        .integer('address_id')
        .unsigned()
        .references('id')
        .inTable('addresses')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
  }

  public async down() {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('address_id');
    });
  }
}
