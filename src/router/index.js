import { createRouter, createWebHistory } from "vue-router";
import Main from "@/components/Main/Main";
import PricingBlock from "@/components/PricingBlock/PricingBlock";
import CardsBlock from "@/components/CardsBlock/CardsBlock";
import GetInTouchDesktop from "@/components/GetInTouchDesktop";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  { path: "/home", name: "Home", component: Main },
  {
    path: "/product",
    name: "Product",
    component: CardsBlock,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: PricingBlock,
  },
  {
    path: "/contact",
    name: "GetInTouch",
    component: GetInTouchDesktop,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
