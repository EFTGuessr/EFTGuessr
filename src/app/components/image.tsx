import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const getImage = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/images');
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    // not a valid json since its a direct url to aws s3. must use .text()
    const data = await response.text()
    return data
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

export default async function ScreenshotImage() {
 const imageUrl = await getImage()
 
  return (
    <div>
      {imageUrl ? (
        <Image src={imageUrl} alt="Customs" width='1200' height='1200'/>
      ) : (
        <p>Loading image...</p>

      )}
    </div>
  );
};


