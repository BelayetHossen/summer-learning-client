

const PageTitle = ({ title, text, img }) => {
    return (
        <div>
            <div className="h-[200px] relative isolate overflow-hidden bg-purple-500 md:py-14 pt-4">
                <img
                    src={img}
                    alt="Banner"
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                />
                <div className="md:pt-0 pt-5">
                    <div className="flex flex-col items-center">
                        <h2 className="text-5xl font-bold tracking-tight text-white md:text-5xl text-center">{title}</h2>
                        <p className="mt-3 text-lg leading-8 text-gray-300 text-center">{text}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PageTitle;