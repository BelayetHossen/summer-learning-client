import Contact from "../layouts/Contact";
import PopularClass from "../layouts/PopularClass";
import PopularInstructor from "../layouts/PopularInstructor";
import Slider from "../layouts/Slider";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet><title>Home | Summer learning language</title></Helmet>
            <Slider></Slider>
            <PopularClass />
            <PopularInstructor />
            <Contact />
        </div>
    );
};

export default Home;