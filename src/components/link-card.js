function LinkCard({ title, description, url }) {
    return (
      <div className="bg-white shadow-md rounded-md p-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
        </a>
        <p className="text-gray-600">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Read More
        </a>
      </div>
    );
  }

  export default LinkCard;