import config from '~/config';
import AllProduct from '~/pages/AllProduct';
import Pants from '~/pages/Pants';
import { DefaultLayout } from '~/layouts';

const routes = [
    {
        path: config.routes.Home,
        component: AllProduct,
    },
    {
        path: config.routes.Pants,
        component: Pants,
        layout: DefaultLayout,
    },
];

export default routes;
