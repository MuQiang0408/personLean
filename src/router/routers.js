let allRouter = [{
  path: "/",
  name: "index",
  component: resolve => require(["../view/index/index.vue"], resolve),
}]

export default allRouter;