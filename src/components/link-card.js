function LinkCard({ title, url }) {
    return (
      <div className="bg-gray-200 rounded-full p-4 hover:bg-gray-300">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-xl font-semibold">{title}</h2>
        </a>
      </div>
    );
  }
  

  export default LinkCard;