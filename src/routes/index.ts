import Home from "@/pages/home.page";
import NotFound from "@/pages/404.page";
import Layout from "@/components/layout";

const PUBLIC_ROUTES = [
  { path: "/", page: Home, layout: Layout },
  { path: "*", page: NotFound, layout: Layout }
];

export { PUBLIC_ROUTES };
