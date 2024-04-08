
export function Header() {
  return (
    <div style={{ zIndex: 1000 }}>
      <div className="flex p-4 bg-white w-full fixed top-0 justify-between items-center">
        <div className="ml-4">
          <Avatar />
        </div>
        <div className="mr-4">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export function Avatar(){
  return(
<div className="flex ml-4 mt-4 ">
 <div className="w-12 h-12 rounded-full overflow-hidden">
      <img src="/profile-pic-8.png" alt="Avatar" className="object-cover w-full h-full" />
    </div>
    <h1 className="mt-2 ml-4 text-lg font-bold  hover:text-purple-700 transition duration-500">RAM MAHESHWARI</h1>
</div>
  )
}

export function Menu() {
  return (
    <div className="flex justify-end w-full sm:w-3/4 mt-6 sm:mt-0">
      <input type="checkbox" id="toggle-menu" className="hidden" />
      <label htmlFor="toggle-menu" className="text-lg font-bold hover:text-purple-700 transition duration-500 sm:hidden">
        
      </label>
      <div className="hidden sm:flex space-x-12">
        <a href="#home" className="text-xm text-gray-800 hover:text-purple-700 transition duration-500">HOME</a>
        <a href="#about" className="text-xm text-gray-800 hover:text-purple-100 transition duration-500">ABOUT</a>
        <a href="#projects" className="text-xm text-gray-800 hover:text-purple-700 transition duration-500">PROJECTS</a>
        <a href="#contact" className="text-xm text-gray-800 hover:text-purple-700 transition duration-500">CONTACT</a>
      </div>
      <div className="sm:hidden">
        <div className="sm:absolute sm:top-0 sm:right-0 sm:bg-white sm:w-full sm:h-full sm:pt-20 sm:px-4">
          <a href="#home" className="block text-lg font-bold hover:text-purple-700 transition duration-500">HOME</a>
          <a href="#about" className="block text-lg font-bold hover:text-purple-700 transition duration-500">ABOUT</a>
          <a href="#projects" className="block text-lg font-bold hover:text-purple-700 transition duration-500">PROJECTS</a>
          <a href="#contact" className="block text-lg font-bold hover:text-purple-700 transition duration-500">CONTACT</a>
        </div>
      </div>
    </div>
  );
}


