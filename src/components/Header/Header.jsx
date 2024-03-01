import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-screen-2xl m-auto flex justify-between items-center	h-20 shadow-2xl">
      <div className="logo-text">
        <h1 className="ml-6 lg:text-2xl font-bold">
          Career
          <span className="text-white bg-slate-800 rounded px-1 ml-1">Hub</span>
        </h1>
      </div>
      <div className="nav-links">
        <NavLink to={`/`} className="mr-4">Home</NavLink>
        <NavLink className="mr-4">Career</NavLink>
        <NavLink className="mr-4">Jobs</NavLink>
        <NavLink className="mr-4">Applied Jobs</NavLink>
        <NavLink to={`contact`} className="mr-4">
          Contact
        </NavLink>
      </div>
      <div className="nab-button">
        <button className="mr-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Apply Job
        </button>
      </div>
    </div>
  );
};

export default Header;
