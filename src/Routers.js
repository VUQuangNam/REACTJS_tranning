import Dashboard from './pages/dashboard';
import Users from './pages/user';
import Settings from './pages/settings';

const routes = [
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/users', name: 'Users', component: Users },
    { path: '/settings', name: 'Settings', component: Settings },
];

export default routes;