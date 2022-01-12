import { RouteRecordRaw } from 'vue-router'

/*
let obj = {
  path: '',
  component: '',
  children: []
}*/
let layoutRoutes = [] as RouteRecordRaw[]
//获取文件对象
const layouts = import.meta.globEager('../layouts/*.vue')
//拿到文件名 遍历
Object.entries(layouts).forEach(([file, module])=>{
  layoutRoutes.push({
    path: `/${(file.split('/')[2]).split('.')[0]}`,
    component: module.default
  } as RouteRecordRaw)
})
export default layoutRoutes


