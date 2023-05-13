function VideoCard() {
    return (
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Video"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Video Card</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
            eleifend nisl. Mauris fringilla dapibus semper.
          </p>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default VideoCard;