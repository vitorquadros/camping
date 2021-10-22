import Route from '@ioc:Adonis/Core/Route';

import './auth';
import './users';
import './tours';

Route.get('/', async () => {
  return { hello: 'world' };
});
