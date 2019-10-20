import Login from "../views/pages/Login"
import Page404 from "../views/pages/Page404"

export const constantRouterMap = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        hidden: true,
    }, {
        path: '/404',
        name: '404',
        component: Page404,
        hidden: true,
    },
]
