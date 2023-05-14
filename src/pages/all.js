import { useEffect, useState } from "react";
import Footer from "../components/footer";
import GoogleMap from "../components/googlemap";
//import LinkCard from "../components/link-card";
import NewsCard from "../components/news-card";
import PictureCard from "../components/picture-card";
import TextCard from "../components/text-card";
import VideoCard from "../components/video-card";
import Loader from "../components/loader";
import { searchForAllResults } from "../assets/js/script";
import LinkCard from "../components/link-card";
import { Link } from "react-router-dom";

export default function AllPage () {

    const [loading_var, loading_func] = useState(true);
    const [err_var, err_function] = useState(false);
    const [page_data_var, page_data_func] = useState({
        general_informations:[], suggested_links: [],
        image_results: [], video_results: [],
        news_results: [], map_results: [],
        suggested_searches: []
    })
    
    function fetchNestedData(obj, groupName = '') {
        for (let key in obj) {
          if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Found a nested object or array
            if (Array.isArray(obj[key])) {
              // If the value is an array, group the data
              console.log(`Group: ${groupName}`);
              console.log(`Data: `, obj[key]);
            } else {
              // If the value is an object, recursively fetch nested data
              const nestedGroupName = groupName !== '' ? `${groupName}.${key}` : key;
              fetchNestedData(obj[key], nestedGroupName);
            }
          }
        }
      }

    // searching for default message
    useEffect(() => {
        searchForAllResults((status, results) => {
            err_function(status ? false : true); // checking for error message 
            if (!status) return;
            loading_func(false); 
            var data = JSON.parse(JSON.stringify(results)); console.log(data);

            // each categories
            var general = data.general_information, images = data.images,
                links = data.links, maps = data.maps, news = data.news,
                suggestions = data.suggestions, videos = data.videos;

            // general info
            var info_arr = [<TextCard content={general} />], map_array = [],
                link_arr = [], image_arr = [], video_arr = [], news_arr = [],
                suggestion_arr = [];
            
            // image information
            images.forEach(image => {
                const url = image.url, title = image.title, thumbnail = image.thumbnail;
                image_arr.push(<PictureCard title={title} url={url} thumbnail={thumbnail} />);
            });
  
            // video information
            videos.forEach(video => {
                const url = video.url, title = video.title, thumbnail = video.thumbnail;
                video_arr.push(<VideoCard title={title} url={url} thumbnail={thumbnail} />);
            });
  
            page_data_func({
                general_informations: info_arr, suggested_links: [],
                image_results: image_arr, video_results: video_arr,
                news_results: [], map_results: [],
                suggested_searches: []
            })
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