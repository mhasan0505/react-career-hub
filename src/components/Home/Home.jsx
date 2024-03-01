import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Home.css';
import SearchBar from "../SearchBar/SearchBar";


const Home = () => {
    return (
        <div>
            <Header/>
            <SearchBar/>
            <Outlet/>
            
            <Footer/>
        </div>
    );
};

export default Home;