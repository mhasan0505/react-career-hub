import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-500 text-white  w-full h-80 flex justify-around pt-20">
      <div className="services flex flex-col leading-7">
        <h2 className="pb-6 text-xl">SERVICES</h2>
        <a href="">Branding</a>
        <a href="">Design</a>
        <a href="">Marketing</a>
        <a href="">Advertise</a>
      </div>
      <div className="company flex flex-col leading-7">
        <h2 className="pb-6 text-xl">COMPANY</h2>
        <a href="">About Us</a>
        <NavLink to={`contact`}>Contact</NavLink>
        <a href="">Jobs</a>
        <a href="">Press Kit</a>
      </div>
      <div className="legal flex flex-col leading-7">
        <h2 className="pb-6 text-xl">LEGAL</h2>
        <a href="">Terms Of Use</a>
        <a href="">Privacy Policy</a>
        <a href="">Coolie Policy</a>
      </div>
      <div className="newletter flex flex-col">
        <h2 className="pb-6 text-xl">NEWSLETTER</h2>
        <label htmlFor="text" className="pb-4">Enter Your email address</label>
        <div className="flex">
          <div>
            <input className="block rounded pl-2 h-10 text-black"  type="text" placeholder="username@site.com" />
          </div>
          <div>
            <button className=" bg-white text-orange-500 font-bold py-2 px-4 rounded ml-2">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
