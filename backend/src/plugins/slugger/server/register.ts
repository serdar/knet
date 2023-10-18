import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
  // register phase
  strapi.customFields.register({
    name: "slugger",
    plugin: "slugger",
    type: "string"
  });
};
