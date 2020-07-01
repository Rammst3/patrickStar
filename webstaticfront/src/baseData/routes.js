import pageRoutes, {noAuths, noFrames, keepAlives} from './routes';
import ReactLoadable from "react-loadable";
import PageLoading from "./loading";

// 不需要页面框架的页面配置
export const noFrameRoutes = ['/login',];

// 不需要登录的页面
export const noAuthRoutes = ['/login',];

// 需要keep alive 页面
export const keepAliveRoutes = [
    {
        path: '/',
        keepAlive: false,
    },
    {
        path: '/login',
        keepAlive: false,
    }
];

// 所有人都可以访问的页面
export const commonPaths = [
    '/',
    '/login',
];
/*
* 非脚本抓取的路由，可以在这里编辑，脚本抓取的路由在./src/pages/page-routes.js中
* */
export default [
    // {path: '/', component: () => import('../pages/home/index')},
].concat(pageRoutes)
    .map(item => {
    //    console.log(pageRoutes);
        return {
            path: item.path,
            component: ReactLoadable({loader: item.component, loading: PageLoading}),
        };
    })
