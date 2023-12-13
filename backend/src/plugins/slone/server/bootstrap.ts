import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  // bootstrap phase
  console.log(`xxxxx-bootstrap`)
  strapi.log.info(`xxxxx-bootstrap`)
};
