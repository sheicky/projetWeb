import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import UserLogin from './components/UserLogin.vue';
import UserRegister from './components/UserRegister.vue';
import ForgotPassword from './components/ForgotPassword.vue';
import ResetPassword from './components/ResetPassword.vue';
import UserDashboard from './components/UserDashboard.vue';
import AdminDashboard from './components/AdminDashboard.vue';
import AdminLogin from './components/AdminLogin.vue';
import UpdatePassword from './components/UpdatePassword.vue';
import UserPanier from './components/UserPanier.vue';  // Import du composant Cart
import UserPayment from './components/UserPayment.vue';  // Import du composant Payment

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/login', component: UserLogin },
  { path: '/register', component: UserRegister },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/reset-password', component: ResetPassword },
  { path: '/dashboard', component: UserDashboard, meta: { requiresAuth: true } },
  { path: '/admin/dashboard', component: AdminDashboard, meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/admin/login', component: AdminLogin },
  { path: '/update-password', component: UpdatePassword, meta: { requiresAuth: true } },
  { path: '/UserPanier', component: UserPanier, meta: { requiresAuth: true } },  // Route pour le panier utilisateur
  { path: '/UserPayment', component: UserPayment, meta: { requiresAuth: true } }  // Route pour le paiement
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = user && user.token;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next('/login');
    } else if (to.matched.some(record => record.meta.requiresAdmin)) {
      if (user.role !== 'admin') {
        next('/dashboard');
      } else {
        next();
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
