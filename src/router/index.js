import Vue from "vue";
import VueRouter from "vue-router";
import RegisMem from "../views/RegisMem.vue";
import IndexPage from "../views/PageOne.vue";
import LoginNew from "../views/LoginNew.vue";
import HomeView from "../views/HomeView.vue";
import ArticleForm from "../views/ArticleForm.vue";
import ProductShow from "../views/ProductShow.vue";
import ProductDetail from "../components/ProductDetail.vue";
import EditData from "../components/EditData.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: IndexPage,
  },
  {
    path: "/reGis",
    component: RegisMem,
  },
  {
    path: "/loginD",
    component: LoginNew,
  },
  {
    path: "/artiCle",
    component: ArticleForm,
  },
  {
    path: "/proUser",
    component: ProductShow,
    children: [
      {
        path: "productdetail:id",
        name: "productdetail",
        component: ProductDetail,
      },
    ],
  },
  {
    path: "/items",
    component: HomeView,
  },
  {
    path: "/edit",
    name: "edit",
    component: EditData,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
