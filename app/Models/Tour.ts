import { DateTime } from 'luxon';
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm';
import { TourLocation } from 'App/Models';

export default class Tour extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public slug: string;

  @column()
  public description: string;

  @column()
  public private: boolean;

  @column()
  public difficulty: 'easy' | 'experient' | 'expert';

  @column()
  public duration: number;

  @column()
  public maxGroupSize: number;

  @column()
  public price: number;

  @column()
  public startLocationId: number;

  @column.dateTime()
  public startDate: DateTime;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasOne(() => TourLocation)
  public tourLocation: HasOne<typeof TourLocation>;
}
