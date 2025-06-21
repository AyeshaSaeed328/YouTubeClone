import { v2 as cloudinary } from 'cloudinary';


export const deleteImageFromCloudinary = async (imageUrl) => {
  try {
    if (!imageUrl) throw new Error("Image URL is required");

    const url = new URL(imageUrl);
    const pathname = url.pathname; 

    const pathParts = pathname.split('/');
    const fileWithExt = pathParts[pathParts.length - 1]; 
    const publicId = fileWithExt.split('.')[0]; 

    const result = await cloudinary.uploader.destroy(publicId);

    return result;
  } catch (error) {
    console.error("Failed to delete image from Cloudinary:", error.message);
    return null;
  }
};
