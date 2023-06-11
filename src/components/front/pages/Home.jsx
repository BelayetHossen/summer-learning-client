import Contact from "../layouts/Contact";
import PopularClass from "../layouts/PopularClass";
import PopularInstructor from "../layouts/PopularInstructor";
import Slider from "../layouts/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClass />
            <PopularInstructor />
            <Contact />
        </div>
    );
};

export default Home;