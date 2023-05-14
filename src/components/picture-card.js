import { Link } from "react-router-dom";

function PictureCard(props) {
    return (
      <Link target="" to={props.url} className="max-w-xs rounded-lg overflow-hidden shadow-lg">
        <img
          className="w-full h-56 object-cover"
          src={props.thumbnail}
          alt="Nature"
        />
        <div className="p-4">
          <h2 className="text-md font-bold text-gray-800 mb-2">{props.title}</h2>
          {/* <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
            eleifend nisl. Mauris fringilla dapibus semper.
          </p> */}
          <div className="mt-4">
            {/* <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Read More
            </button> */}
          </div>
        </div>
      </Link>
    );
  }

  export default PictureCard;