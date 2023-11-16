import { Strapi } from '@strapi/strapi';
import pluginId from '../admin/src/pluginId';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: 'uuid' ,
    plugin: pluginId,
    type: 'string',
  })
  console.log(`xxxxx-register`)
  strapi.log.info(`xxxxx-register`)
};