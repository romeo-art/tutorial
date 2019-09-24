// import AUTH from '../services/auth'
let beforeEnter = (to, from, next) => {
    // AUTH.currentPath = to.path
    // if (to.meta.tokenREquired === false) {
       next()
    // } else {
    //     next({ path: '/' })
    // }
}
var devroutes = []
let app = require('router/app.js')
devroutes = devroutes.concat(app.default.routes)
for (let x = 0; x < devroutes.length; x++) {
    devroutes[x]['beforeEnter'] = beforeEnter
}
let routes = [
    // {
    //     path: '/',
    //     name: 'Header',
    //     component: resolve => require([''], resolve),
    //     beforeEnter:  beforeEnter
    // },
    // {
    //     path: '/',
    //     name: 'login',
    //     component: resolve => require(['components/Login.vue'], resolve),
    //     beforeEnter:  beforeEnter
    // }
]
routes = routes.concat(devroutes)
export default {
    routes: routes
}
