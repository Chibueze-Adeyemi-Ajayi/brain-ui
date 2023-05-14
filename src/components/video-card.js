function VideoCard({url, thumbnail, title}) {
    return (
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src={url}
            title="Video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
        <h2 className="text-md font-normal text-center text-gray-800 mb-2">{title}</h2>
          {/* <p className="text-gray-600">{prop}</p>  */}
          <div className="mt-4">
            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Watch Now
            </button> */}
          </div>
        </div>
      </div>
    );
  }

  export default VideoCard;