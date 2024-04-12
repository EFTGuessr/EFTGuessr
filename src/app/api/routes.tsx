import { NextApiRequest, NextApiResponse } from 'next';
import { S3Client, ListBucketsCommand, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3 = new S3Client();


//getting image keys
const getImageKeys = async (userId: string) => {
    const command = new ListObjectsV2Command({
        Bucket: process.env.AWS_BUCKET,
        Prefix: userId
    })
    const {Contents = []} = await s3.send(command)
    return Contents.map(image=>image.Key)
}

// get presigned Urls
const getPresignedUrls = async (userId: any) => {
    try {
        const imageKeys = await getImageKeys(userId)

        const presignedUrls = Promise.all(imageKeys.map((key)=>{
            const command = new GetObjectCommand({
                Bucket: process.env.AWS_BUCKET,
                Key: key
            })
            getSignedUrl(s3, command, {expiresIn:900})
        }))
        
        return {presignedUrls}
     } catch (error) {
        console.log('error in presignedUrls', error)
     }
}


export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const userId = req.headers["x-user-id"]
    const  presignedUrls = getPresignedUrls(userId)
    return res.json(presignedUrls)
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    res.status(500).send('Error fetching image from S3');
  }
}
