module.exports = {
    routes: [
      {
        method: "GET",
        path: "/",
        handler: "controllers.doSomething",
        config: {
            auth: true
        }
      },
      {
        method: "GET",
        path: "/slone",
        handler: "controllers.doSomething",
        config: {
            auth: true
        }
      },
    ],
  };