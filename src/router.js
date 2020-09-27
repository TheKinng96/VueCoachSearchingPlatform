import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import RequestsContact from './pages/requests/RequestsContact.vue';
import RequestsReceive from './pages/requests/RequestsReceive.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: 'contact', component: RequestsContact }]
    },
    { path: '/register', component: CoachRegister },
    { path: '/requests', component: RequestsReceive },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
