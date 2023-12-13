import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => {
    doSomething: (ctx) => {
        console.log(`doSomething ctx`)
    }
}