import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import Register from "../views/Register";
import Users from "../views/users/Users";
import SingleUser from "../views/users/SingleUser";
import Form from "../views/users/Form";
import Resources from "../views/resources/Resources";
import SingleResource from "../views/resources/SingleResource";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/add_user",
    name: "AddUser",
    component: Form
  },
  {
    path: "/users",
    name: "Users",
    children: [
      {
        path: "",
        component: Users
      },
      {
        path: ":id",
        children: [
          {
            path: "",
            component: SingleUser
          },
          {
            path: "edit",
            component: Form
          }
        ]
      }
    ]
  },
  {
    path: "/resources",
    name: "Resources",
    children: [
      {
        path: "",
        component: Resources
      },
      {
        path: ":id",
        component: SingleResource
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
