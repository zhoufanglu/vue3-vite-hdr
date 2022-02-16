import { createApp } from 'vue'
import App from './App.vue'

import router, {setUpRouter} from './router'

async function bootstrap() {
  const app = createApp(App)
  setUpRouter(app)
  // 路由加载后 再挂载页面
  await router.isReady()
  app.mount('#app')
}

await bootstrap()
