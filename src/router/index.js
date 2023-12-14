import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FoodsView from '../views/FoodsView.vue';
import FoodDetail from '../views/FoodDetail.vue';
import Keranjang from '../views/KeranjangView.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/foods',
    name: 'Foods',
    component: FoodsView,
  },
  {
    path: '/foods/:id',
    name: 'FoodDetail',
    component: FoodDetail,
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component: Keranjang,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
