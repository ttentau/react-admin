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
        layout: 'app',
        hidden: false,
        component: App,
        meta:{
            icon:'',
            title:'文章管理'
        },
        children: [
            {
                path: '/index',
                component: Article,
                hidden: false,
                meta:{
                    icon:'',
                    title:'文章列表'
                }
            },
            {
                path: '/create',
                component: CreateArticle,
                hidden: false,
                meta:{
                    icon:'',
                    title:'添加文章'
                }
            },
        ]
    },
]
