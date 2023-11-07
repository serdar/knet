import { Strapi } from '@strapi/strapi';

// export default ({ strapi }: { strapi: Strapi }) => {
//   // register phase
// };

import pluginId from '../admin/src/pluginId';

export default ({ strapi }: { strapi: Strapi }) => {
  strapi.customFields.register({
    name: 'slone',
    plugin: pluginId,
    type: 'string',
  })
};