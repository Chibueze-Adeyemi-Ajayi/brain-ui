const Index = () => {
    return <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
    <div className="flex flex-col space-y-2 mb-5">
        <font className="font-extrabold text-center text-blue-600 text-3xl">BRAIN</font>
        <font className="font-semibold text-center">Infinte Intelligence</font>
    </div> 
    <div className="flex">
      <input
        placeholder="Ask jilo anything"
        type="text"
        className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path className="fill-white" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
      </svg>
    </button>
    </div>
    <div className="mt-6">
      <button className="text-sm text-blue-600 hover:underline">
        Google Search
      </button>
      <button className="text-sm text-blue-600 hover:underline ml-2">
        I'm Feeling Lucky
      </button>
    </div>
    <div className="mt-12 text-gray-600">
      <p>
        Jilo Innovations &copy; {new Date().getFullYear()}
      </p>
    </div>
  </div>
}

export default Index;