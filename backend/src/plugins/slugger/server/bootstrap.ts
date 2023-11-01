"use strict";

import type { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => {
  const { contentTypes } = strapi;
  const models = Object.keys(contentTypes).reduce((acc, key) => {
    const contentType = contentTypes[key];
    if (!key.startsWith("api")) return acc;

    const attributes = Object.keys(contentType.attributes).filter((attrKey) => {
      const attribute = contentType.attributes[attrKey];
      if (attribute.customField === "plugin::field-uuid.uuid") {
        return true;
      }
    });

    if (attributes.length > 0) {
      return { ...acc, [key]: attributes };
    }

    return acc;
  }, {}) as { [key: string]: string[] };

  const modelsToSubscribe = Object.keys(models);

  strapi.db.lifecycles.subscribe((event) => {
    if (
      event.action === "beforeCreate" &&
      modelsToSubscribe.includes(event.model.uid)
    ) {
      models[event.model.uid].forEach((attribute) => {
        if (!event.params.data[attribute]) {
          event.params.data[attribute] = "test value";
        }
      });
    }
  });
};
