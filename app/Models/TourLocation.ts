import { DateTime } from 'luxon';
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import { Address, LocationCoordinate } from '.';

export default class TourLocation extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public locationName: string;

  @column()
  public addressId: number;

  @column()
  public coordinatesId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasOne(() => Address)
  public address: HasOne<typeof Address>;

  @hasOne(() => LocationCoordinate)
  public coordinate: HasOne<typeof LocationCoordinate>;
}
