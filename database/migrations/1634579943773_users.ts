import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('full_name').notNullable();
      table.string('username').notNullable().unique();
      table.string('email', 255).notNullable().unique();
      table.string('password', 180).notNullable();
      table.string('cpf').notNullable();
      table.date('birthday').notNullable();

      table.string('role').defaultTo('user');
      table.string('avatar').defaultTo('default-profile.jpeg');

      table.string('remember_me_token').nullable();
      table.timestamp('created_at', { useTz: true }).notNullable();
      table.timestamp('updated_at', { useTz: true }).notNullable();
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
