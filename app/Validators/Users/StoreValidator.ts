import { schema, rules } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    fullName: schema.string({ trim: true }),
    username: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' })
    ]),
    password: schema.string({ trim: true }, [rules.confirmed('passwordConfirmation')]),
    cpf: schema.string({ trim: true }, [rules.minLength(11), rules.maxLength(11)]),
    birthday: schema.date(),

    state: schema.string({ trim: true }),
    city: schema.string({ trim: true }),
    street: schema.string({ trim: true }),
    streetNumber: schema.number(),
    zipCode: schema.string({ trim: true })
  });

  public messages = {};
}
