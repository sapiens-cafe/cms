export default ({ env }) => ({
  newsletter: {
    enabled: true,
    resolve: "./src/plugins/newsletter",
  },

  ...(env("NODE_ENV") === "production"
    ? {
        upload: {
          config: {
            provider: "cloudinary",
            providerOptions: {
              cloud_name: env("CLOUDINARY_NAME"),
              api_key: env("CLOUDINARY_KEY"),
              api_secret: env("CLOUDINARY_SECRET"),
            },
            actionOptions: {
              upload: {},
              uploadStream: {},
              delete: {},
            },
          },
        },
      }
    : {}),
});
