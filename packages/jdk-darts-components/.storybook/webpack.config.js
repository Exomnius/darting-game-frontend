const path = require('path');

module.exports = async ({config}) => {
	config.module.rules.push({
		test: /\.scss$/,
		use: [
			'vue-style-loader',
			'css-loader',
			{
				loader: 'sass-loader',
				options: {
					data: `@import "~@jdk-darts/jdk-darts-styles/scss/index.scss";`
				}
			}
		],
	});

	config.module.rules.push({
		test: /\.vue$/,
		loader: 'storybook-addon-vue-info/loader',
		enforce: 'post',
	});

	config.resolve = {
		alias: {
			'@': path.dirname(path.resolve(__dirname))
		}
	};

	return config;
};
