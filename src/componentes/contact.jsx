export function Contact() {
  return (
    <div id="contact" className=" ">
       <div style={{
                backgroundImage: 'linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/common-bg.svg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                padding: '1.5rem 8rem', // Agrega el padding al contenedor principal
            }}>
    <div className="container mx-auto text-center">
        <div className="projects ">
        <h2 className="text-center text-5xl mb-5 font-bold ">CONTACT</h2>
            <div className=" text-xl border-b-8 border-purple-600 w-10 mx-auto rounded-full mt-3 mb-2"></div>
            <div className="text-center text-xl text-gray-700 mb-14">
                <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as </p>
                <p>possible</p>
            </div>
        </div>
        <div className="container mx-auto bg-white rounded-md shadow-lg w-7/12 m-10">
            <div className="p-8">
                <form className="mt-4">
                    <div className="mb-10">
                        <label className="block text-gray-500 text-base font-bold mb-2 text-start" htmlFor="name">Name</label>
                        <input className="appearance-none border rounded w-full p-5 bg-gray-100 text-gray-800 font-semibold leading-tight focus:outline-none " id="name" type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className="mb-10">
                        <label className="block text-gray-500 text-base font-bold mb-2 text-start" htmlFor="email">Email</label>
                        <input className="appearance-none border rounded w-full p-5 bg-gray-100 text-gray-800 font-semibold leading-tight focus:outline-none " id="email" type="email" placeholder="Enter your Email" />
                    </div>
                    <div className="mb-10">
                        <label className="block text-gray-500 text-base font-bold mb-2 text-start" htmlFor="message">Message</label>
                        <textarea className="appearance-none border rounded w-full p-5 bg-gray-100 text-gray-800 font-semibold leading-tight h-56 focus:outline-none " id="message" placeholder="Enter Your Message"></textarea>
                    </div>
                    <div className="flex items-center justify-end">
                        <button className="bg-violet-600 my-3 py-4 px-12 rounded-md uppercase text-white font-bold text-base shadow-xl tracking-wider w-48" type="button">
                           Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
</div>
  );
}
