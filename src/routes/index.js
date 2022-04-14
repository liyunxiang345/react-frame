import loadable from '@/utils/loadable'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index'))
const Article  = loadable(() => import(/* webpackChunkName: 'article' */ '@/views/Article'))
const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
    { path: '/article', exact: false, name: 'Article',component: Article, auth: [1]}
]

export default routes