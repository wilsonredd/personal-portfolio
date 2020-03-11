import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock_portfolio from './mock-portfolio.js'
import mock_blog from './mock-blog.js'

Vue.config.productionTip = false

let data = {
	portfolio: mock_portfolio,
	blog: mock_blog,
}

new Vue({
	router,
	data,
	render: h => h(App)
}).$mount('#app')