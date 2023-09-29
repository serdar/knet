// process.env.ENV_PATH=`./.env.${process.env.NODE_ENV}`
// console.log(`xxx:`, process.env.ENV_PATH);
// console.log(`xxx:`, process.env.DATABASE_URL);
// console.log(`xxx:`, process.cwd());

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
