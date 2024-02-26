import React, { useState, useEffect, useRef } from 'react';
import NextImage from "next/legacy/image";  // Import with alias

export default function ImageWithLoadingState({ src, alt }) {
    const [isLoading, setIsLoading] = useState(true);
    const imgRef = useRef(null);

    const handleImageLoaded = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        console.error('Failed to load image');
    };

    useEffect(() => {
        // Use native Image constructor for preloading
        const img = new window.Image();

        //if theres and image element and its done loading
        if (imgRef.current && imgRef.current.complete) {
            handleImageLoaded();
            return;
        }
        //when successfully loaded fire function
        img.onload = handleImageLoaded;
        img.onerror = handleError;
        img.src = src;

    }, [src]);

    return (
        <div className='flex justify-center'>
            {isLoading && <p>Loading...</p>}
            {/* Use the Next.js Image component alias */}
            <div style={{display: 'none'}} className='py-[1rem] rounded-lg w-3/5 flex justify-center items-center bg-gradient-to-r from-[#BB002F] to-[#9D1739] shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] '>
                <NextImage 
                    ref={imgRef}
                    src={src} 
                    alt={alt}
                    style={{ display: isLoading ? 'none' : 'block', width: '100%'}}
                />
            </div>

            <div className='py-[1rem] flex justify-center items-center bg-gradient-to-r from-[#BB002F] to-[#9D1739] shadow-[0_5px_20px_1px_rgba(0,0,0,0.3)] '>
                <NextImage 
                    ref={imgRef}
                    src={src} 
                    alt={alt}
                    style={{ display: isLoading ? 'none' : 'block', width: '80%'}}
                />
            </div>
        </div>
    );
}