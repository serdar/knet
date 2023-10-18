/**
 * post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::post.post', ({strapi}) => ({
    async findOne(ctx) {
        const {year, month, slug} = ctx.params;
        var yr = `${year}-${month}-01`;

        const filterDateStart = new Date(year, month, 1);

        const nDate = new Date(year, month, 0).toLocaleString('en-AU', {
            timeZone: 'Australia/Sydney'
        });

        console.log(`ndate`, nDate);

        const entity = await strapi.db.query("api::post.post").findOne({
            where: {
                slug: slug,
                pubDate: {
                    $between: ['2022-09-01T00:00:00.000Z','2022-09-30T00:00:00.000Z']
                }
            }
        })
        strapi.log.debug(entity);
        entity.attributes.pubDate = 'test';
        return {entity};
    }
}));
