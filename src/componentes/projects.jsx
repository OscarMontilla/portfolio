export function Projects() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-5xl font-bold mb-6">PROJECTS</h2>
      <div className="flex justify-center items-center mb-6">
        <div className=" text-xl border-b-8 border-purple-600 w-10 mx-auto rounded-full mt-1"></div>
      </div>
      <p className="text-gray-600 text-center text-xl">
        Here you will find some of the personal and client projects that I
        created. Each project contains its own case study.
      </p>

      <div className="flex justify-center items-center mt-6">
        <div className="w-2/4">
          <img src="dopefolio.jpeg" alt="Dopefolio Preview" />
        </div>
        <div className="ml-6 w-2/4 p-24">
          <h2 className="text-3xl font-bold mb-2">Dopefolio</h2>
          <p className="text-xl text-gray-600">
            Dopefolio is a successful Open-Source project that I created, which
            has been featured on some of the biggest tech sites like CSS-Tricks,
            Hostinger, etc. It is used by thousands of developers globally.
          </p>
          <button className="py-5 px-14 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            CASE STUDY
          </button>
        </div>
      </div>

      
      

      <div className="flex justify-center items-center mt-20">
        <div className="w-2/4">
          <img src="/wilsonport.jpeg" alt="Dopefolio Preview" />
        </div>
        <div className="ml-6 w-2/4 p-24">
          <h2 className="text-3xl font-bold mb-2">Wilsonport</h2>
          <p className="text-xl text-gray-600">
          Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.
          </p>
          <button className="py-5 px-14 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            CASE STUDY
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <div className="w-2/4">
          <img src="/boreal-coffee-clone.jpeg" alt="Dopefolio Preview" />
        </div>
        <div className="ml-6 w-2/4 p-24">
          <h2 className="text-3xl font-bold mb-2">Boreal Coffee Clone</h2>
          <p className="text-xl text-gray-600">
          I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.
          </p>
          <button className="py-5 px-14 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            CASE STUDY
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        <div className="w-2/4">
          <img src="/crown-template.jpeg" alt="Dopefolio Preview" />
        </div>
        <div className="ml-6 w-2/4 p-24">
          <h2 className="text-3xl font-bold mb-2">Crown Template</h2>
          <p className="text-xl text-gray-600">
          Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.
          </p>
          <button className="py-5 px-14 mt-4 font-bold text-white bg-purple-600 rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
            CASE STUDY
          </button>
        </div>
      </div>
      
    </div>
    
  );
}
