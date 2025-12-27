/**
 * subscriber controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::subscriber.subscriber",
  ({ strapi }) => ({
    // Method 1: Creating an entirely custom action
    async deleteByEmail(ctx) {
      const { email } = ctx.request.body;

      if (!email) {
        return ctx.badRequest("Email is required");
      }
      const subscriber = await strapi
        .service("api::subscriber.subscriber")
        .find({
          filters: { email },
        });
      if (subscriber.data.length === 0) {
        return ctx.notFound("Subscriber not found");
      }
      await strapi
        .service("api::subscriber.subscriber")
        .delete(subscriber.data[0].id);

      ctx.send({ message: "Subscriber deleted successfully" });
    },
  }),
);
