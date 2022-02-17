import { createApp } from 'vue'
import App from './App.vue'

import router, {setUpRouter} from './router'

console.log('环境变量', import.meta.env)

async function bootstrap() {
  const app = createApp(App)
  setUpRouter(app)
  // 路由加载后 再挂载页面
  await router.isReady()
  app.mount('#app')
}

bootstrap()
