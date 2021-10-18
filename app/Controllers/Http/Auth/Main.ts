import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class AuthUserController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password, {
      expiresIn: '30 days'
    });

    return token;
  }

  public async destroy({}: HttpContextContract) {}
}
