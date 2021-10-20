import { DateTime } from 'luxon';
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import { User } from '.';

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public state: string;

  @column()
  public adressId: number;

  @column()
  public city: string;

  @column()
  public street: string;

  @column()
  public streetNumber: number;

  @column()
  public zipCode: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasOne(() => User)
  public user: HasOne<typeof User>;
}
