'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
}).middleware('auth')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')
Route.get('/properties', 'PropertyController.index')
Route.get('/properties/:id', 'PropertyController.show')
Route.get('/imovel/:id', 'PropertyController.mostrar')
Route.post('properties/:id/images', 'ImageController.store')