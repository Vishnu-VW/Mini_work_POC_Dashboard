import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../components/DashBoard.vue';
// import Widgets from '../components/Widgets.vue';
// import UIElements from '../components/UIElements.vue';
// import AdvancedUI from '../components/AdvancedUI.vue';
// import FormElements from '../components/FormElements.vue';
// import Editors from '../components/Editors.vue';
// import Charts from '../components/Charts.vue';
// import Tables from '../components/Tables.vue';
// import Popups from '../components/Popups.vue';
// import Notifications from '../components/Notifications.vue';
// import Icons from '../components/Icons.vue';
// import Maps from '../components/Maps.vue';
// import UserPages from '../components/UserPages.vue';
// import ErrorPages from '../components/ErrorPages.vue';
// import GeneralPages from '../components/GeneralPages.vue';
// import Ecommerce from '../components/Ecommerce.vue';
// import Email from '../components/Email.vue';
// import Calendar from '../components/Calendar.vue';
// import TodoList from '../components/TodoList.vue';
// import Gallery from '../components/Gallery.vue';
// import Documentation from '../components/Documentation.vue';

const routes = [
  { path: '/', component: Dashboard },
//   { path: '/widgets', component: Widgets },
//   { path: '/ui-elements', component: UIElements },
//   { path: '/advanced-ui', component: AdvancedUI },
//   { path: '/form-elements', component: FormElements },
//   { path: '/editors', component: Editors },
//   { path: '/charts', component: Charts },
//   { path: '/tables', component: Tables },
//   { path: '/popups', component: Popups },
//   { path: '/notifications', component: Notifications },
//   { path: '/icons', component: Icons },
//   { path: '/maps', component: Maps },
//   { path: '/user-pages', component: UserPages },
//   { path: '/error-pages', component: ErrorPages },
//   { path: '/general-pages', component: GeneralPages },
//   { path: '/ecommerce', component: Ecommerce },
//   { path: '/email', component: Email },
//   { path: '/calendar', component: Calendar },
//   { path: '/todo-list', component: TodoList },
//   { path: '/gallery', component: Gallery },
//   { path: '/documentation', component: Documentation },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
