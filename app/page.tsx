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
                    </section>
                </div>
            </main>
        </main>
    )
}