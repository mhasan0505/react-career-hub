const SearchBar = () => {
  return (
    <div>
      <div className="bg-orange-400 h-[600px] w-full relative z-30 flex justify-center items-center">
        <div className="bg-white h-40 w-3/5 flex justify-center items-center absolute rounded-md">
          <div>
            <input
              className=" lg:w-96 sm:w-48 h-10 px-5 m-auto mr-3 block
            outline-orange-300 rounded shadow-lg "
              type="text"
              placeholder="Search Jobs Here.."
            />
          </div>
          <div>
            <button className=" bg-orange-400 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="title bg-slate-900 h-48 flex justify-around items-center text-center">
        <div>
          <h5 className="text-2xl text-white mb-4">785,855 new properties</h5>
          <p className="text-white ">added within the last 30 days</p>
        </div>
        <div>
          <h3 className="text-2xl text-white mb-4">373,018 other people</h3>
          <p className="text-white ">
            have used our website within the last 30 days
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-white mb-4">Get notified</h3>
          <p className="text-white ">
            define your criteria - and get new listings in your inbox every day
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
