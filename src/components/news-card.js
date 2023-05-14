function NewsCard({url}) {
    return (
      <div className="max-w-md rounded-lg overflow-hidden shadow-lg">
        <a href={url} className="text-blue-700 underline">{url}</a>
        {/* <img
          className="w-full h-48 object-cover"
          src="https://via.placeholder.com/400x200"
          alt="News"
        /> */}
        {/* <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">News Card</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
            eleifend nisl. Mauris fringilla dapibus semper.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Read More
            </a>
          </div>
        </div> */}
      </div>
    );
  }

  export default NewsCard;