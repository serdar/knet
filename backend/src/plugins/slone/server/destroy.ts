import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  // destroy phase
  console.log(`xxxxx-destroy`)
  strapi.log.info(`xxxxx-destroy`)
};
