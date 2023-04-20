import loadable from "@loadable/component";

export const DefaultLayout = loadable(() => import("@/common/components/layout"));
export const NotFound = loadable(() => import("@/modules/not-found/views/404.page"));
export const Home = loadable(() => import("@/modules/home/views/home.page"));
export const ItemList = loadable(() => import("@/modules/products/views/itemlist/itemlist.page"));
export const ProductDetail = loadable(() => import("@/modules/products/views/detail/detail.page"));
