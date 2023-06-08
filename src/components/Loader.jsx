
import "./loader.css"
const Loader = () => {
    return (
        <div>
            <div className="z-20 fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-[#030712] opacity-50 flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-yellow-700 h-12 w-12 mb-4"></div>
            </div>
        </div>
    );
};

export default Loader;