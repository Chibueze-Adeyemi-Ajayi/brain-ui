import PictureCard from "../components/picture-card";
import TextCard from "../components/text-card";

export default function AllPage () {
    return <section className="w-full p-3 md:p-6 mt-[55px] h-full space-y-6">
        <section className="w-full flex">
            <div className="w-[65%] mx-auto">
                <TextCard/>
            </div>
        </section>
        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6">
                <h3 className="font-bold text-2xl">Image Results</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">
                    <PictureCard/> <PictureCard/>
                    <PictureCard/> <PictureCard/>
                    <PictureCard/> <PictureCard/>
                </div>
            </div>
        </section>
    </section>
}