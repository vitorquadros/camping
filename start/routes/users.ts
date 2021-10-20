import Route from '@ioc:Adonis/Core/Route';

Route.post('/users', 'Users/Main.store');
Route.get('/users/:username', 'Users/Main.show');
