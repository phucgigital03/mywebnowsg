import config from '~/config';
import AllProductHome from '~/pages/AllProductHome';
import Allitem from '~/pages/AllItem';
import Pants from '~/pages/Pants';
import Tee from '~/pages/Tee';
import Sweater from '~/pages/Sweater';
import OneProduct from '~/pages/OneProduct';
import Contact from '~/pages/Contact';
import FormPay from '~/pages/FormPay';
import NotFound from '~/pages/NotFound';
import Account from '~/pages/Account';
import { DefaultLayout, LayoutProductDetail } from '~/layouts';

const routes = [
    {
        path: config.routes.Home,
        component: AllProductHome,
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
        path: config.routes.Sweater,
        component: Sweater,
        layout: DefaultLayout,
    },
    {
        path: config.routes.Tee,
        component: Tee,
        layout: DefaultLayout,
    },
    {
        path: config.routes.ItemDetail,
        component: OneProduct,
        layout: LayoutProductDetail,
    },
    {
        path: config.routes.Contact,
        component: Contact,
        layout: LayoutProductDetail,
    },
    {
        path: config.routes.Checkout,
        component: FormPay,
        layout: null,
    },
    {
        path: config.routes.Account,
        component: Account,
        layout: LayoutProductDetail,
    },
    {
        path: config.routes.ErrorPages,
        component: NotFound,
        layout: null,
    },
];

export default routes;
