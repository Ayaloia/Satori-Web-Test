"use client"

import Image from "next/image";

export default function GalleryPicture({src, alt, width, height}: {src: string, alt: string, width: number, height: number}) {
    return (
        <div className={`relative rounded-xl max-w-full shadow-lg transition ease-in-out duration-200 hover:scale-105
        ${(width / height > 1.33 ? 'aspect-[1.33]' : (width / height < 0.75 ? 'aspect-[0.75]' : 'aspect-auto scale-90 hover:scale-95'))}
        ${(height > width ? 'h-[400px]' : 'w-[400px]')}`}>
            <Image className="object-cover rounded-xl" src={src} alt={alt} fill={true}/>
        </div>
    )
}
