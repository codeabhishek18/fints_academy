import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

export async function GET(req)
{
    
        const s3Client = new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
              accessKeyId: process.env.AWS_ACCESS_KEY,
              secretAccessKey: process.env.AWS_SECRET_KEY,
            },
        });

        const listAllFiles = async (bucketName) => 
        {
            try 
            {
                let isTruncated = true;
                let continuationToken;
          
                while (isTruncated) 
                {
                    const params = {
                    Bucket: bucketName,
                    ContinuationToken: continuationToken,
                    };
          
                    // Use the ListObjectsV2Command to fetch the objects
                    const data = await s3Client.send(new ListObjectsV2Command(params));
          
                    // Process each object (file) in the bucket
                    data.Contents.forEach((file) => {
                    console.log(`File: ${file.Key}`);
                    });
          
                    // Check if there are more files to fetch
                    isTruncated = data.IsTruncated;
                    continuationToken = data.NextContinuationToken;
                }
            } 
            catch (error) 
            {
                console.error("Error fetching files: ", error);
            }
          };
          
          // Call the function with your bucket name
          listAllFiles(process.env.BUCKET_NAME);
        
        
            
          
        return NextResponse.json({message: 'Success'});

}
