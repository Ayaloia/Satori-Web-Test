import {LeadIn, SatoriIntroduce} from "@/app/IndexClientComponent";
import {GenerateGallery} from "@/app/GalleryPicture";
import {GetSatoriGallery} from "@/public/satoriGallery/satoriGallery";

export default function Home() {

    return (
        <main className="bg-black">
            <LeadIn/>
            <main className="p-5 h-fit">
                <div className="rounded-3xl h-fit p-5 bg-gray-400 space-y-10">
                    <SatoriIntroduce/>
                    <section className="h-fit w-full bg-gray-300 shadow-lg rounded-2xl p-4 space-y-5">
                        <h2 className="text-5xl font-semibold">画廊</h2>
                        <div>
                            <GenerateGallery GetGalleryImages={GetSatoriGallery}/>
                        </div>
                        {/*breakpoint arbitrary values seems must be sorted*/}
                        {/*<Gallery>*/}
                        {/*    <GalleryPicture src={"/satoriGallery/71d2fd04e95dbeb7.jpg"} alt={"satori"} width={1692}*/}
                        {/*                    height={2048}/>*/}
                        {/*    <GalleryPicture src={"/satoriGallery/55180e9719e99a1c.jpg"} alt={"satori"} width={1677}*/}
                        {/*                    height={2048}/>*/}
                        {/*    <GalleryPicture src={"/satoriGallery/illust_58204212_20190215_214148.jpg"} alt={"satori"} width={900}*/}
                        {/*                    height={542}/>*/}
                        {/*    <GalleryPicture src={"/satoriGallery/99266380_p0.png"} alt={"satori"} width={1158}*/}
                        {/*                    height={1637}/>*/}
                        {/*</Gallery>*/}

                    </section>
                </div>
            </main>
        </main>
    )
}