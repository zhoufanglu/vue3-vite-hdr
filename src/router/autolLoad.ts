// 自动导入注册路由， 读取layouts、views里面的路由

import { RouteRecordRaw } from 'vue-router'
// 布局路由
const layouts = import.meta.globEager('../layouts/*.vue') // * 一层目录
// 展示路由, 文件夹是跟布局路由匹配的， admin-admin ,  member - member， 展示路由是布局路由的子路由
const views = import.meta.globEager('../views/**/*.vue') // ** 自动递归目录

//获取所有的路由
function getRoutes(): RouteRecordRaw [] {
  // 遍历 获取文件名和模块
  const layoutRoutes = [] as RouteRecordRaw[]
  for(let key in layouts) {
    const route = getRoute(key, layouts[key])
    const childrenRoutes = getChildrenRoutes(route)
    route.children = childrenRoutes
    layoutRoutes.push(route)
  }
  return layoutRoutes
}

function getChildrenRoutes(layoutsRoute:RouteRecordRaw) {
  // console.log(29, layoutsRoute)
  //根据name匹配子路由
  const childRoutes = [] as RouteRecordRaw []
  for(let key in views) {
    if(key.includes(layoutsRoute.name as string)){
      const route = getRoute(key, views[key])
      childRoutes.push(route)
    }
  }
  return childRoutes
}

/**
 * 生成单个路由对象
 * @param key
 * @param value
 */
function getRoute(key:string, value:any): RouteRecordRaw {
  //console.log(41, key)
  // name应该去掉 ../layouts, ../views
  let path = key.replace('../layouts', '')
    .replace('../views', '')
    .replace('.vue','')
  const name = path.replace('/', '').replace('/','.')
  const component = value.default
  // 看看有没有自定义path
  path = component.route?.path ? component.route?.path : path
  return {
    name,
    path,
    component
  }
}

export default getRoutes()
