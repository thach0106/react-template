import { DefaultLayout, Home, NotFound, ProductDetail, ItemList } from "./loadable";

const PUBLIC_ROUTES = [
  { path: "/", component: Home, layout: DefaultLayout },
  {
    path: "products/",
    layout: DefaultLayout,
    children: [
      {
        path: "",
        component: ItemList
      },
      {
        path: ":id",
        component: ProductDetail
      }
    ]
  },
  { path: "*", component: NotFound, layout: DefaultLayout }
];

export { PUBLIC_ROUTES };
