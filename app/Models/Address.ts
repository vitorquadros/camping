import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

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

  @column.dateTime({
    autoCreate: true,
    serializeAs: null
  })
  public createdAt: DateTime;

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serializeAs: null
  })
  public updatedAt: DateTime;
}
