import type { Core } from "@strapi/strapi";

const config = {
  type: "content-api",
  routes: [
    {
      // Path defined with a URL parameter
      method: "DELETE",
      path: "/subscriber",
      handler: "api::subscriber.subscriber.deleteByEmail",
    },
  ],
};

export default config;
