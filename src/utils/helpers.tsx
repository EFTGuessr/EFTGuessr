export default function validateS3SignedUrl(url: string) {
    const regex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
  
    if (!regex.test(url)) {
      throw new Error("[UploadSection/uploadFile] Invalid URL");
    }
}