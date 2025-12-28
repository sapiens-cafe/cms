export default ({ env }) => ({
  newsletter: {
    enabled: true,
    resolve: "./src/plugins/newsletter",
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: env("S3_BASE_URL", "http://localhost:9000/local-bucket"),
        s3Options: {
          credentials: {
            accessKeyId: env("S3_KEY", "strapi_user"),
            secretAccessKey: env("S3_SECRET", "strapi_password"),
          },
          endpoint: env("S3_ENDPOINT", "http://localhost:9000"), // Local MinIO
          forcePathStyle: true, // Required for MinIO
          region: env("S3_REGION", "us-east-1"), // MinIO needs a placeholder region
          params: {
            Bucket: env("S3_BUCKET", "local-bucket"),
            ACL: "private", // <== set ACL to private
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
          // Cette ligne force la génération d'URLs signées pour l'affichage
          getSignedUrl: {
            expiresIn: 3600, // Durée de validité en secondes (1h)
          },
        },
      },
    },
  },
});
