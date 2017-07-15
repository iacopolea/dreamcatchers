import Vue from 'vue';
import Navbar from './components/navbar.vue';

export default new Vue({
    el: '#dc-app',
    components: {
        Navbar: Navbar
    },
    data: {
        app: {
            name: 'Dream Catchers'
        }
    }
});