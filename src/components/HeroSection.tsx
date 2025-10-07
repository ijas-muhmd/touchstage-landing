'use client';

export default function HeroSection() {
  return (
    <header>
      <div className="mx-auto w-full max-w-[1726px] px-4 md:px-6 flex flex-col items-center py-12 md:py-18">
        <div className="flex flex-col items-center gap-6 text-center xl:max-w-[66.67%]">
          <h1 className="font-headline-xl text-balance whitespace-pre-wrap text-black">
            Better customer experiences.
            Built on Sierra.
          </h1>
          <p className="max-w-xl font-body-m whitespace-pre-wrap text-gray-350 md:font-body-l xl:font-headline-s">
            Sierra helps businesses build better, more human customer experiences with AI.
          </p>
        </div>
        
        <div className="relative mt-12 aspect-3/4 w-full md:aspect-16/7 !aspect-auto">
          <div className="relative m-auto flex gap-4 md:gap-0 aspect-video max-h-[80vh] !aspect-auto">
            <div className="h-full w-full bg-gray-100 absolute top-0 left-0"></div>
            <div className="relative cursor-none w-full" style={{opacity: 1, height: '600px'}}>
              <button 
                type="button" 
                className="group absolute z-10 h-full w-full cursor-pointer focus:outline-none bg-gray-100"
              >
                <div className="absolute bottom-9 z-10 flex w-full items-center justify-center">
                  <div className="inline-flex h-14 items-center justify-center gap-4 rounded-full bg-green-500 p-1 outline-hidden transition group-hover:bg-white group-focus-visible:bg-green-800 hover:bg-white w-auto">
                    <span className="h-12 w-12 rounded-full border border-white p-4 text-white transition group-hover:border-green-500 group-hover:text-green-500 group-focus-visible:border-green-300 group-focus-visible:bg-green-300 group-focus-visible:fill-white group-focus-visible:text-white">
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="-mt-[0.05rem] h-auto w-4"
                      >
                        <path 
                          d="M21 12L6 3V21L21 12Z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <span className="pr-4 text-base text-white group-hover:text-green-500 group-focus-visible:text-white">
                      Watch Video
                    </span>
                  </div>
                </div>
                
                {/* Placeholder for video - using a gradient background to simulate the video content */}
                <div className="h-full w-full overflow-hidden object-cover bg-gradient-to-br from-blue-100 via-white to-gray-100 rounded-lg">
                  {/* This would be replaced with actual video element */}
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-8 h-8 text-green-500"
                        >
                          <path 
                            d="M21 12L6 3V21L21 12Z" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-gray-600 font-medium">Video Player Placeholder</p>
                      <p className="text-sm text-gray-500">Actual video would be loaded here</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
