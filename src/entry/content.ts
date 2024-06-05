import { createApp } from 'vue'
import content from '../view/content.vue'


const mountedterm = document.createElement('div');

document.body.appendChild(mountedterm);

mountedterm.id='get_form'

createApp(content).mount('#get_form');
