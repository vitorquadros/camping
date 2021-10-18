import { DateTime } from 'luxon';
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import { User } from 'App/Models';

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public state: string;

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

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;
}
