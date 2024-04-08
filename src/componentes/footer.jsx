export function Footer() {
    return (
      <div id="footer" className="bg-black text-white">
      <div className="container mx-auto p-20">
          <div className="flex justify-around">
              <div className="">
                  <h4 className="text-2xl tracking-wider font-bold py-1.5">RAM MAHESHWARI</h4>
                  <p className="mt-2 text-base w-[500px]">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
              </div>
              <div className="">
                  <h4 className="text-2xl tracking-wider font-bold py-1.5 m-1">SOCIAL</h4>
                  <div className="redes flex justify-evenly">
                      <div className="m-1 rounded "><img className="h-7 w-7 filter invert" src="/linkedin-dark.svg" alt="" /></div>
                      <div className="m-1 rounded "><img className="h-7 w-7 filter invert" src="/twitter-dark.svg" alt="" /></div>
                      <div className="m-1 rounded "><img className="h-7 w-7 filter invert" src="/yt-dark.svg" alt="" /></div>
                      <div className="m-1 rounded "><img className="h-7 w-7 filter invert" src="/github-dark.svg" alt="" /></div>
                      <div className="m-1 rounded "><img className="h-7 w-7 filter invert" src="/book-dark.svg" alt="" /></div>
                  </div>
              </div>
          </div>
          <div className="mx-10 pt-20">
              <div className="border-t bg-gray-50 opacity-25 w-4/5 mx-auto"></div>
              <div className="text-center text-xs pt-10">© Copyright 2024 . Made by <a href="#" className="underline font-bold">Ram Maheshwari</a></div>
          </div>
      </div>
  </div>
      
      
    );
  }