if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../components/header/header'
import Index from '../components/pages/index'

export default {
	path: '/',
	component: App,
	getChildRoutes(location, cb) {
		require.ensure([], (require) => {
			cb(null, [ 
				require('./aboutRoute.js').default
			])
		})
	},
	indexRoute: {
		component: Index
	}
}