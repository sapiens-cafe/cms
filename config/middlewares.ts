export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:", "http:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "localhost:9000",
            "127.0.0.1:9000",
            "storage.railway.app", // Autorise le domaine de stockage Railway
            "*.railway.app", // Autorise tous les sous-domaines Railway par sécurité
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "localhost:9000",
            "127.0.0.1:9000",
            "storage.railway.app", // Autorise le domaine de stockage Railway
            "*.railway.app", // Autorise tous les sous-domaines Railway par sécurité
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  "global::deepPopulate",
];
