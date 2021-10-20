import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { Address, User } from 'App/Models';
import { StoreValidator } from 'App/Validators/Users';

export default class MainsController {
  // public async index({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const {
      fullName,
      username,
      email,
      password,
      cpf,
      birthday,
      state,
      city,
      street,
      streetNumber,
      zipCode
    } = await request.validate(StoreValidator);

    const user = await User.create({ fullName, username, email, password, cpf, birthday });
    const address = await Address.create({ state, city, street, streetNumber, zipCode });

    await user.related('address').associate(address);

    return user;
  }

  public async show({}: HttpContextContract) {}

  // public async edit({}: HttpContextContract) {}

  // public async update({}: HttpContextContract) {}

  // public async destroy({}: HttpContextContract) {}
}
