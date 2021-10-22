import { schema, rules } from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [rules.unique({ table: 'tours', column: 'name' })]),
    description: schema.string({ trim: true }),
    private: schema.boolean(),
    difficulty: schema.enum(['easy', 'experient', 'expert']),
    duration: schema.number(),
    maxGroupSize: schema.number(),
    price: schema.number(),
    startDate: schema.date(),

    locationName: schema.string({ trim: true }),
    state: schema.string({ trim: true }),
    city: schema.string({ trim: true })
  });

  public messages = {};
}
