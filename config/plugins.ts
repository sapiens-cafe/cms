export default ({ env }) => ({
  newsletter: {
    enabled: true,
    resolve: "./src/plugins/newsletter",
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("S3_KEY", "strapi_user"),
            secretAccessKey: env("S3_SECRET", "strapi_password"),
          },
          endpoint: env("S3_ENDPOINT", "http://127.0.0.1:9000"), // Local MinIO
          forcePathStyle: true, // Required for MinIO
          region: env("S3_REGION", "us-east-1"), // MinIO needs a placeholder region
          params: {
            Bucket: env("S3_BUCKET", "local-bucket"),
          },
        },
      },
    },
  },
});
