import Login from "../views/pages/Login"
import App from "../App"
import Article from "../views/article/Article"
import CreateArticle from "../views/article/CreateArticle"

export const routeConfig = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/',
        component: App,
    },
    {
        path: '/article',
        layout:'app',
        component: App,
        children: [
            {
                path: '/index',
                component: Article,
            },
            {
                path: '/create',
                component: CreateArticle,
            },
        ]
    },
]
