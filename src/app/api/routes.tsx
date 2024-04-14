import { NextApiRequest, NextApiResponse } from 'next';
import { S3Client, ListBucketsCommand, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const config = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
  region: process.env.AWS_REGION as string
};

const s3 = new S3Client(config);

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
  const command = new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET,
    Key: 'Customs',
  });

  // await the signed URL and return it
  return await getSignedUrl(s3, command);
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    res.status(500).send('Error fetching image from S3');
  }
}
