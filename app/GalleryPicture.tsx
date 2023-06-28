import Image from "next/image";
import * as fs from "fs";
import imageSize from "image-size";
import path from "path";
import {SkewedCard} from "@/app/IndexClientComponent";
import React from "react";

export function GalleryPicture({src, alt, width, height}: {src: string, alt: string, width: number, height: number}) {
    return (
        <div className={`relative transition-all ease-in-out duration-200 hover:scale-105 w-full h-full
        ${(width / height > 1.2 ? 'aspect-[1.33] col-span-8 row-span-6' : (width / height < 0.8 ? 'aspect-[0.75] col-span-6 row-span-8' : 'aspect-square col-span-7 row-span-7'))}`}>
            <SkewedCard className="relative rounded-xl shadow-lg">
                <Image className="object-cover rounded-xl" src={src} alt={alt} fill={true} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
            </SkewedCard>
        </div>
    )
}

export function Gallery({children}: {children: React.ReactNode}) {
    return (
        <div className="grid grid-flow-row-dense auto-rows-fr sm:grid-cols-[repeat(14,_1fr)] lg:grid-cols-[repeat(21,_1fr)] w-full h-fit gap-6">
            {children}
        </div>
    )
}

export function GenerateGallery({GetGalleryImages}: {GetGalleryImages: () => string[]}) {
    const files = GetGalleryImages();
    return (
        <Gallery>
            {files.map((file) => {
                    const fullPath = path.join(process.cwd(), "public", file);
                    const imgSize = imageSize(fullPath);
                    if (imgSize.width != undefined && imgSize.height != undefined) {
                        return (
                            <GalleryPicture key={file} src={file.replace('\\', '/')} alt="satori" width={imgSize.width}
                                            height={imgSize.height}/>
                        );
                    }
                }
            )}
        </Gallery>
    )
}
