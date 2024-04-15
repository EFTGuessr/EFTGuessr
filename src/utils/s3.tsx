import { S3Client } from "@aws-sdk/client-s3";

// https://www.npmjs.com/package/@aws-sdk/client-s3
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/

export const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  },
  region: process.env.AWS_REGION
});