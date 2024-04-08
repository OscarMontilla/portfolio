export function Home() {
    return (
        <div className="text-2xl">
            <div style={{
                backgroundImage: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/common-bg.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                padding: '1.5rem 8rem', // Agrega el padding al contenedor principal
            }}>     


            <div className="redes">
                <Redes />
            </div>


            <div className="absolute top-1/3 mt-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="font-bold text-7xl text-center text-black ">HEY, I'M RAM MAHESHWARI</h1>
                <h5 className="text-gray-700 text-center mt-16">
                A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
                </h5>
                <div className="text-center mt-6">
                    <button className="py-5 px-14 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                        PROJECTS
                    </button>
                </div>
            </div>

        
            </div>
        </div>
    );
}

  export function Redes (){
    return (
        <>
        <div className=" absolute left-0 top-1/4 py-5 flex flex-col justify-center items-start px-4 bg-white">
            <a href="#" className="mb-4">
                <img src="/linkedin-dark.svg" alt="" className="w-10 " />
            </a>
            <a href="#" className="mb-4">
                <img src="/twitter-dark.svg" alt="" className="w-10" />
            </a>
            <a href="#" className="mb-4">
                <img src="/yt-dark.svg" alt="" className="w-10 " />
            </a>
            <a href="#" className="mb-4">
                <img src="/github-dark.svg" alt="" className="w-10 " />
            </a>
            <a href="#">
                <img src="/book-dark.svg" alt="" className="w-10 " />
            </a>
    </div>

        </>
    )
}