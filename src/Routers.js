import Evaluate from "./pages/evaluate";
import Home from "./pages/home";
import RouterBus from "./pages/route-bus";
import Student from "./pages/student";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/home', name: 'Home', component: Home },
    { path: '/route-bus', name: 'RouterBus', component: RouterBus },
    { path: '/evaluate', name: 'Evaluate', component: Evaluate },
    { path: '/student', name: 'Student', component: Student },
];

export default routes;