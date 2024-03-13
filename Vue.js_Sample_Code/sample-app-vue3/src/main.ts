import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './components/MyComponent.vue'

console.log(App)

const app = createApp(App)

// Global component
app.component('MyComponent', MyComponent)

app.mount('#app')
