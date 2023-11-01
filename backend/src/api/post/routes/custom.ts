module.exports = {
  routes: [
    {
      method: "GET",
      path: "/posts/:year/:month/:slug",
      handler: "post.findOne",
    },
  ],
};
