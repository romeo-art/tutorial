export default {
    routes : [{
        path: '/login',
        name: 'login',
        component: resolve => requestAnimationFrame(['.components/Login.vue'], resolve),
        meta:{
            tokenRequired : true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => requestAnimationFrame(['../modules/register.vue'], resolve),
        meta:{
            tokenRequired : false   
        }
    }
    ]
}