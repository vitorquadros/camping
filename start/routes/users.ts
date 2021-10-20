import Route from '@ioc:Adonis/Core/Route';

Route.get('/users', 'Users/Main.index');
Route.post('/users', 'Users/Main.store');
Route.get('/users/:username', 'Users/Main.show');
