import TextCard from "../components/text-card";

export default function AllPage () {
    return <section className="w-full p-3 md:p-6 mt-[55px] h-full space-y-3">
        <section className="w-full flex">
            <div className="w-[65%] mx-auto">
                <TextCard/>
            </div>
        </section>
    </section>
}