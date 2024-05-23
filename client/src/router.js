import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/UserLogin.vue';
import Register from './components/UserRegister.vue';
import ResetPassword from './components/ResetPassword.vue';
import UpdatePassword from './components/UpdatePassword.vue';
import VerifyEmail from './components/VerifyEmail.vue';
import UserDashboard from './components/UserDashboard.vue';
import AdminDashboard from './components/AdminDashboard.vue';
import AdminLogin from './components/AdminLogin.vue';
import ForgotPassword from './components/ForgotPassword.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/forgot-password', component: ForgotPassword },
  { path: '/reset-password/:resetToken', component: ResetPassword },
  { path: '/update-password', component: UpdatePassword },
  { path: '/verify-email', component: VerifyEmail },
  { path: '/user', component: UserDashboard, meta: { requiresAuth: true } },
  { path: '/admin', component: AdminDashboard, meta: { requiresAuth: true, requiresAdmin: true } },
  { path: '/admin-login', component: AdminLogin },
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
        next('/user');
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
