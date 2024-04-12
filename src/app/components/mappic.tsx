'use client'
import React, { useState, useEffect, } from 'react';
import Image from 'next/image';

export default function ImageComponent() {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    let imageUrl: string | null = null;

    const fetchImage = async () => {
      try {
        const response = await fetch("")
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
   
       
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageSrc && <Image src={imageSrc} alt="Image" width="200" height="200" />}
    </div>
  );
}