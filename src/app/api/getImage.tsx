import { NextApiRequest, NextApiResponse } from 'next';
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3 } from '@/utils/s3'

// https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
// https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html


export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET,
      Key: 'Customs',
    });

    const signedUrl = await getSignedUrl(s3, command);
  
    res.status(200).json({ signedUrl });
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    res.status(500).json({ message: 'Error fetching image from S3' });
  }
}