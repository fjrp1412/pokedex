import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@views/HomeView.vue";
import PokedexView from "@views/PokedexView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: { name: "home" },
    },
    {
      path: "/pokedex",
      component: PokedexView,
      name: "pokedex",
    },
  ],
});

export default router;
