import { DateTime } from 'luxon';
import Hash from '@ioc:Adonis/Core/Hash';
import { column, beforeSave, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import { Address } from 'App/Models';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public fullName: string;

  @column()
  public username: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public cpf: string;

  @column()
  public birthday: DateTime;

  @column()
  public role: string;

  @column()
  public avatar: string;

  @column({ serializeAs: null })
  public addressId: number;

  @column()
  public rememberMeToken?: string;

  @column.dateTime({
    autoCreate: true,
    serialize: (date: DateTime) => date.toFormat('dd/MM/yyyy HH:mm:ss')
  })
  public createdAt: DateTime;

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (date: DateTime) => date.toFormat('dd/MM/yyyy HH:mm:ss')
  })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @belongsTo(() => Address)
  public address: BelongsTo<typeof Address>;
}
