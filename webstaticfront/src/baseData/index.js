import React from "react";
import { session } from "./storage";
import { ROUTE_BASE_NAME } from "../index";

const CURRENT_USER_KEY = "current-user";

const localStorage = window.localStorage;
const sessionStorage = window.sessionStorage;

export const Murl_IP = "http://192.168.0.63:20000";

/**
 * 设置当前用户信息
 */
export function setLoginUser(currentUser = {}) {
    // 将用户属性在这里展开，方便查看系统都用到了那些用户属性
    const {
        id,
        name,
        avatar,
        token,
        permissions,
        isTwoUser,
        userRoleCode,
        userName,
        userType
    } = currentUser;
    const userStr = JSON.stringify({
        id, // 用户id 必须
        name, // 用户名 必须
        avatar, // 用头像 非必须
        token, // 登录凭证 非必须 ajax请求有可能会用到，也许是cookie
        permissions, // 用户权限
        isTwoUser, //是否为双用户
        userRoleCode, //用户所属角色
        userName,
        userType
    });

    sessionStorage.setItem(CURRENT_USER_KEY, userStr);
}

/**
 * 获取当前用户信息
 */
export function getLoginUser() {
    //console.log("get login user");
    const loginUser = sessionStorage.getItem(CURRENT_USER_KEY);

    return loginUser ? JSON.parse(loginUser) : null;
}

/**
 * 判断用户是否登录
 */
export function isLogin() {
    // 如果当前用户存在，就认为已经登录了
    return !!getLoginUser();
}

/**
 * 进入首页
 */
export function toHome() {
    // 跳转页面，优先跳转上次登出页面
    const lastHref = window.sessionStorage.getItem("last-href");

    // 强制跳转 进入系统之后，需要一些初始化工作，需要所有的js重新加载
    //window.location.href = lastHref || `${ROUTE_BASE_NAME}/`;
    window.location.href = `${ROUTE_BASE_NAME}/`;
}

/**
 * 跳转到登录页面
 */
export function toLogin() {
    const loginPath = "/#/login";

    // 判断当前页面是否已经是login页面，如果是，直接返回，不进行跳转，防止出现跳转死循环
    //const pathname = window.location.pathname;
    let pathname = window.location.hash;
    pathname = pathname.substring(1);
    // console.log(window.location.pathname);
    // console.log(pathname);
    const isLogin = pathname.indexOf(loginPath) !== -1;
    if (isLogin) return null;
    //console.log(isLogin);
    // 清除相关数据
    session.clear();
    localStorage.setItem(CURRENT_USER_KEY, null);
    sessionStorage.clear();
    //sessionStorage.setItem("last-href", "#" + pathname);

    // 强制跳转，让浏览器刷新，重置数据
    window.location.href = `${ROUTE_BASE_NAME}${loginPath}`;

    return null;
}