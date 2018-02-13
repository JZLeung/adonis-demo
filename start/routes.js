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
| http://adonisjs.com/guides/routing
|
*/
const Database = use('Database')

const Route = use('Route')

Route.on('/').render('welcome')

// Route.get('/number', ({request}) => {
//     const number = +request.input('number')
    
//     if (!number) {
//         return 'Please specify a number by passing ?number=<num> to the url'
//     }

//     const randomNumber = ~~(Math.random() * 20) + 1
//     return randomNumber === number
//             ? 'Matched'
//             : `Match failed. The actual number is ${randomNumber}`
// })

// Route.get('/number2', 'GameController.gaming2')

// Route.get('/blogs', async () => {
//     return await Database.table('blogs').select('*')
// })

// Route.group(() => {
//     Route.post('/regist', 'UserController.regist')
//     Route.post('/login', 'UserController.login').validator('login')
//     Route.get('/logout', 'UserController.logout')
//     Route.get('/check', 'UserController.check')
// }).prefix('user')

Route.group(() => {
    const prefix = 'Admin/Auth'
    Route.get('login', async ({view, auth, response}) => {
        try {
            const user = await auth.getUser()
            response.route('admin.index')
        } catch (error) {
            return view.render('admin.login')
        }
    })
    // .render('admin.login')
    .as('admin.loginPage')
    // .validator('login')
    Route.post('login', `${prefix}Controller.login`).validator('login').as('admin.login')
    Route.get('logout', `${prefix}Controller.logout`).as('admin.logout')
    
}).prefix('admin')

Route.group(() => {
    // Route.resource('blog', 'BlogController')
    // Route.on('/').render('admin.index').as('admin.index')
    Route.get('/', 'Admin/IndexController.index').as('admin.index')
    // Route.
}).prefix('admin').middleware(['adminAuth'])
