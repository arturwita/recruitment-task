import Login from "./views/Login";
import Home from "./views/Home";
import Register from "./views/Register";
import NotFound from "./components/NotFound";
import Todos from "./views/Todos";
import OptionsPanel from "./views/OptionsPanel";
import Unauthorized from "./components/Unauthorized";
import BadRequest from "./components/BadRequest";

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '*',
        name: 'not-found',
        component: NotFound
    },
    {
        path: '/unauthorized',
        name: 'unauthorized',
        component: Unauthorized
    },
    {
        path: '/bad-request',
        name: 'bad-request',
        component: BadRequest
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/todos',
        name: 'todos',
        component: Todos
    },
    {
        path: '/options-panel',
        name: 'options-panel',
        component: OptionsPanel
    },
  ]
