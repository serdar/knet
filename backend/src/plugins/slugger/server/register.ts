import { Strapi } from "@strapi/strapi";
import pluginId from "../admin/src/pluginId";
export default ({ strapi }: { strapi: Strapi }) => {
  // register phase
  strapi.customFields.register({
    name: "slugger",
    plugin: pluginId,
    type: "string",
  });
};
