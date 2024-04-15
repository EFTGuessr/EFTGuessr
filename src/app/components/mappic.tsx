import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const getImage = async () => {
  try {
    const response = await fetch('/api/getImage', {
      cache: 'no-store'
    });
    console.log('response', response)
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    const data = await response.body;
    console.log('data', data)
    return data
  } catch (error) {
    console.error('Error fetching image:', error);
  }
}

export default async function ImageComponent() {
 const imageUrl = await getImage()
 console.log('imageurl', imageUrl)
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


