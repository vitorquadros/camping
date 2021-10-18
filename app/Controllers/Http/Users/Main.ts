import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { User } from 'App/Models';
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

    await user.related('address_id').create({ state, city, street, streetNumber, zipCode });

    return user;
  }

  public async show({}: HttpContextContract) {}

  // public async edit({}: HttpContextContract) {}

  // public async update({}: HttpContextContract) {}

  // public async destroy({}: HttpContextContract) {}
}
