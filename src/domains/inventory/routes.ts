import Add from './pages/Add.vue';
import Edit from './pages/Edit.vue';
import Overview from './pages/Overview.vue';
import Order from './pages/Order.vue';

const routes: {path: string; component: any}[] = [
    {path: '/', component: Overview},
    {path: '/add', component: Add},
    {path: '/edit/:id', component: Edit},
    {path: '/order', component: Order},
];

export default routes;
