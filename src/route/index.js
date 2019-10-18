import Login from "../views/pages/Login"
import Article from "../views/article/Article"
import CreateArticle from "../views/article/CreateArticle"
import Category from "../views/category/Category"
import EditArticle from "../views/article/EditArticle"
import ArticleDetail from "../views/article/ArticleDetail"
import BaseLayout from "../views/layout/BaseLayout"

export const routeConfig = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/article',
        layout: 'app',
        hidden: false,
        component: BaseLayout,
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
            {
                path: '/edit',
                component: EditArticle,
                hidden: false,
                meta:{
                    icon:'',
                    title:'编辑文章'
                }
            },
            {
                path: '/detail',
                component: ArticleDetail,
                hidden: false,
                meta:{
                    icon:'',
                    title:'文章详情'
                }
            },
        ]
    },{
        path: '/category',
        layout: 'app',
        hidden: false,
        component: BaseLayout,
        meta:{
            icon:'',
            title:'分类管理'
        },
        children: [
            {
                path: '/index',
                component: Category,
                hidden: true,
                meta:{
                    icon:'',
                    title:'分类列表'
                }
            },
        ]
    },
]
