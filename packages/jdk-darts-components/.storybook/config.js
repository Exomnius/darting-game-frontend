import Vue from 'vue';
import {configure} from '@storybook/vue';

import '@jdk-darts/jdk-darts-styles/scss/index.scss'

import Button from './../components/Button/Button.vue';

Vue.component('d-button', Button);

function loadStories() {
	const req = require.context('../components', true, /\.stories\.js$/);
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
