function LinkCard({ title, url }) {
    return (
      <div className="bg-gray-200 rounded-full px-4 py-2 hover:bg-gray-300">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-md font-normal">title</h2>
        </a>
      </div>
    );
  }
  

  export default LinkCard;