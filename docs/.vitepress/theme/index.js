// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

export default {
    ...DefaultTheme,
    enhanceApp({ App }) {
        app.component('MyGlobalComponent', /*...*/)
    }
}