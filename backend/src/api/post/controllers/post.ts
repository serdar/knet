/**
 * post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::post.post', ({strapi}) => ({
    async findOne(ctx) {
        const {year, month, slug} = ctx.params;

        const entity = await strapi.db.query("api::post.post").findOne({
            where: {
                slug: slug,
                pubDate: {
                    
                }
            }
        })
        const {data, meta} = await super.find(ctx);
        meta.customDate = Date.now();
        return {data, meta}
    }
}));
