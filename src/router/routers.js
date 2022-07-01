import config from '~/config';
import AllProduct from '~/pages/AllProduct';
import Allitem from '~/pages/AllItem';
import Pants from '~/pages/Pants';
import OneProduct from '~/pages/OneProduct';
import { DefaultLayout, LayoutProductDetail } from '~/layouts';

const routes = [
    {
        path: config.routes.Home,
        component: AllProduct,
    },

    {
        path: config.routes.Allitem,
        component: Allitem,
        layout: DefaultLayout,
    },
    {
        path: config.routes.Pants,
        component: Pants,
        layout: DefaultLayout,
    },
    {
        path: config.routes.ItemDetail,
        component: OneProduct,
        layout: LayoutProductDetail,
    },
];

export default routes;
