import { Carousel } from "@material-tailwind/react";


const Slider = () => {
    return (
        <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <img
                src="https://i.ibb.co/8bB99ps/banner5.jpg"
                alt="image 1"
                className="md:h-[450px] md:w-full object-cover"
            />
            <img
                src="https://i.ibb.co/wRr6Ssq/banner4.jpg"
                alt="image 1"
                className="md:h-[450px] w-full object-cover"
            />
            <img
                src="https://i.ibb.co/n1pHYD3/banner2.jpg"
                alt="image 2"
                className="md:h-[450px] w-full object-cover"
            />
            <img
                src="https://i.ibb.co/wy0v3Nv/banner3.jpg"
                alt="image 3"
                className="md:h-[450px] w-full object-cover"
            />
        </Carousel>
    );
}

export default Slider;