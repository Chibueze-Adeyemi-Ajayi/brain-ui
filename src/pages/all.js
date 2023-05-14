import { useEffect, useState } from "react";
import Footer from "../components/footer";
import GoogleMap from "../components/googlemap";
import LinkCard from "../components/link-card";
import NewsCard from "../components/news-card";
import PictureCard from "../components/picture-card";
import TextCard from "../components/text-card";
import VideoCard from "../components/video-card";
import Loader from "../components/loader";
import { searchForAllResults } from "../assets/js/script";

export default function AllPage () {

    const [loading_var, loading_func] = useState(true);
    const [err_var, err_function] = useState(false);

    useEffect(() => {
        searchForAllResults((status, results) => {
            err_function(status ? false : true); // checking for error message 
            if (!status) return;
            console.log(results);
        });
    }, []);

    return loading_var ? <Loader/> : err_var ? <div className="w-full h-full flex flex-col">
        <div className="w-fit h-fit m-auto">Oops, Something went wrong</div>
    </div> : <section className="w-full p-3 md:p-6 mt-[55px] h-full space-y-6">

        <section className="w-full flex flex-col">
            <div className="w-[65%] mx-auto border-b border-gray-200 pb-8">
                <TextCard/> <br></br><br></br>
                <h3 className="font-bold text-xl text-gray-800">Suggested Links</h3> <br></br>
                <div className="w-full h-fit grid grid-cols-3 gap-3">
                    <LinkCard/> <LinkCard/>
                    <LinkCard/> <LinkCard/>
                    <LinkCard/> <LinkCard/>
                </div>
            </div>
        </section>

        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6 pb-16 border-b border-gray-200">
                <h3 className="font-bold text-xl text-gray-800">Image Results</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">
                    <PictureCard/> <PictureCard/>
                    <PictureCard/> <PictureCard/>
                    <PictureCard/> <PictureCard/>
                </div>
            </div>
        </section>

        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6 pb-16 border-b border-gray-200">
                <h3 className="font-bold text-xl text-gray-800">Video Results</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">
                    <VideoCard/> <VideoCard/>
                    <VideoCard/> <VideoCard/>
                    <VideoCard/> <VideoCard/>
                </div>
            </div>
        </section>
        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6 pb-16 border-b border-gray-200">
                <h3 className="font-bold text-xl text-gray-800">News</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">
                    <NewsCard/> <NewsCard/>
                    <NewsCard/> <NewsCard/>
                    <NewsCard/> <NewsCard/>
                </div>
            </div>
        </section>
        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6 pb-16 border-b border-gray-200">
                <h3 className="font-bold text-xl text-gray-800">Map</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">
                    <GoogleMap />
                </div>
            </div>
        </section>
        
        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6">
                <h3 className="font-bold text-xl text-gray-800">Suggested Search</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">
                    <LinkCard/> <LinkCard/>
                    <LinkCard/> <LinkCard/>
                    <LinkCard/> <LinkCard/>
                </div>
            </div>
        </section>

        <Footer/>
    </section>
}