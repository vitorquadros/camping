import { DateTime } from 'luxon';
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import { LocationCoordinate } from 'App/Models';

export default class TourLocation extends BaseModel {
  public static table = 'tours_locations';

  @column({ isPrimary: true })
  public id: number;

  @column()
  public locationName: string;

  @column()
  public state: string;

  @column()
  public city: string;

  @column()
  public coordinatesId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasOne(() => LocationCoordinate)
  public coordinate: HasOne<typeof LocationCoordinate>;
}
