import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AdminView from '../views/AdminView.vue'
import { useAuthStore } from '../stores/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta : {
        middleware : "auth",
      }
    },
  ]
})
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.middleware == "auth") {
    authStore.verifyAuth();
    if (authStore.authenicated) {
          next();
    } else {
      next('/');
    }
  } else {
    next();
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
export default router
