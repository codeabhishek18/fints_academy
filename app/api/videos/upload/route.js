import { NextResponse } from 'next/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function POST(req)
{
    try
    {
        const { fileName, fileType } = await req.json();

        console.log(fileType);
    
        const s3Client = new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
              accessKeyId: process.env.AWS_ACCESS_KEY,
              secretAccessKey: process.env.AWS_SECRET_KEY,
            },
        });
        
        const generatePresignedUrl = async (bucket, key, contentType) => 
        {
            const command = new PutObjectCommand({
              Bucket: bucket,
              Key: key,
              ContentType: contentType
            });
          
            // Generate a pre-signed URL valid for 1 hour
            const signedUrl = await getSignedUrl(s3Client, command);
            
            return signedUrl;
          };
          
          // Example usage
          const preSignedUrl = await generatePresignedUrl(process.env.BUCKET_NAME, fileName, fileType );
          
        return NextResponse.json(preSignedUrl);
    }
    catch(error)
    {
        return NextResponse.json({error: error.message});
    }
}
