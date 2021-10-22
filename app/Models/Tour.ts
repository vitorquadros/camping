import { DateTime } from 'luxon';
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import { TourLocation } from 'App/Models';
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify';
export default class Tour extends BaseModel {
  public static table = 'tours';

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
  public difficulty: string;

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

  @belongsTo(() => TourLocation, { foreignKey: 'startLocationId' })
  public tourLocation: BelongsTo<typeof TourLocation>;
}
