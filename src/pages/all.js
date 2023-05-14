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
    const [page_data_var, page_data_func] = useState({
        general_informations:"", suggested_links: [],
        image_results: [], video_results: [],
        news_results: [], map_results: [],
        suggested_searches: []
    })

    // searching for default message
    useEffect(() => {
        searchForAllResults((status, results) => {
            err_function(status ? false : true); // checking for error message 
            if (!status) return;
            loading_func(false);
            console.log(results);
        });
    }, []);

    return loading_var ? <Loader/> : err_var ? <div className="w-full h-full flex flex-col">
        <div className="w-fit h-fit m-auto">Oops, Something went wrong</div>
    </div> : <section className="w-full p-3 md:p-6 mt-[55px] h-full space-y-6">

        <section className="w-full flex flex-col">
            <div className="w-[65%] mx-auto border-b border-gray-200 pb-8">
                {page_data_var.general_informations} <br></br><br></br>
                <h3 className="font-bold text-xl text-gray-800">Suggested Links</h3> <br></br>
                <div className="w-full h-fit grid grid-cols-3 gap-3">{page_data_var.suggested_links}</div>
            </div>
        </section>

        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6 pb-16 border-b border-gray-200">
                <h3 className="font-bold text-xl text-gray-800">Image Results</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">{page_data_var.image_results}</div>
            </div>
        </section>

        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6 pb-16 border-b border-gray-200">
                <h3 className="font-bold text-xl text-gray-800">Video Results</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">{page_data_var.video_results}</div>
            </div>
        </section>
        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6 pb-16 border-b border-gray-200">
                <h3 className="font-bold text-xl text-gray-800">News</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">{page_data_var.news_results}</div>
            </div>
        </section>
        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6 pb-16 border-b border-gray-200">
                <h3 className="font-bold text-xl text-gray-800">Map</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">{page_data_var.map_results}</div>
            </div>
        </section>
        
        <section className="w-full flex">
            <div className="w-[65%] mx-auto space-y-6">
                <h3 className="font-bold text-xl text-gray-800">Suggested Search</h3>
                <div className="w-full h-fit grid grid-cols-3 gap-3">{page_data_var.suggested_searches}</div>
            </div>
        </section>

        <Footer/>
    </section>
}