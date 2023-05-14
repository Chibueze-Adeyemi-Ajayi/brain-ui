import { Link } from "react-router-dom";

function LinkCard(props) {
    return (
      <Link to={props.url} className="bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300">
        <div target="_blank" rel="noopener noreferrer">
          <h2 className="text-md font-normal">{props.content}</h2>
        </div>
      </Link>
    );
  }
  

  export default LinkCard;