import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { Tour, TourLocation } from 'App/Models';
import { StoreValidator } from 'App/Validators/Tours';

export default class MainsController {
  // public async index({}: HttpContextContract) {}

  // public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const {
      city,
      description,
      difficulty,
      duration,
      locationName,
      maxGroupSize,
      name,
      price,
      privateTour,
      startDate,
      state
    } = await request.validate(StoreValidator);

    const tour = await Tour.create({
      name,
      description,
      difficulty,
      private: privateTour,
      duration,
      price,
      maxGroupSize,
      startDate
    });

    const location = await TourLocation.create({ city, state, locationName });
    // TODO: create location coordinates

    await tour.related('tourLocation').associate(location);

    return tour;
  }

  // public async show({}: HttpContextContract) {}

  // public async edit({}: HttpContextContract) {}

  // public async update({}: HttpContextContract) {}

  // public async destroy({}: HttpContextContract) {}
}
