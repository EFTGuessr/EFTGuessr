import { NextApiRequest, NextApiResponse } from 'next';
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3 } from '@/utils/s3'
import dotenv from 'dotenv';

// https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html
// https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjectsV2.html

dotenv.config()

type ResponseData = {
 url?: string,
 message?: string
}

export async function GET(req: NextApiRequest,  res: NextApiResponse<ResponseData>) {
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: 'Customs/customtest.png',
    });
    // must change key to expressions of folder(map) and image

    const url = await getSignedUrl(s3, command,{ expiresIn: 3600 });
    console.log('url', url)
    res.status(200).json({ url });
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    res.status(500).json({ message: 'Error fetching image from S3' });
  }
}