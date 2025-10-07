'use client';

export default function SierraSpeaksSection() {
  return (
    <section className="relative bg-gray-100 py-12 md:py-16 xl:py-18" style={{zIndex: 4}}>
      <div className="mx-auto w-full max-w-[1160px] px-4 md:px-6">
        <div className="grid grid-cols-12 gap-2 md:gap-4 pb-8 md:pb-14 xl:pb-14">
          <h2 className="col-span-12 font-headline-l text-black xl:col-span-8 xl:row-start-1">
            Sierra speaks
          </h2>
          <div className="col-span-12 row-start-2 xl:col-span-8">
            <p className="font-body-s whitespace-pre-wrap text-gray-400 md:max-w-xl">
              Introducing voice, a new way to communicate with your customers.
            </p>
          </div>
          <div className="col-span-12 row-start-3 flex min-w-[170px] pt-2 xl:col-span-3 xl:col-start-10 xl:row-start-1 xl:items-end xl:justify-end xl:place-self-end">
            <a 
              className="inline-flex cursor-pointer items-center justify-between rounded-full outline-hidden disabled:cursor-not-allowed transition-all duration-150 focus:bg-green-400 hover:bg-green-400 focus-visible:bg-green-400 active:bg-green-600 disabled:bg-gray-400 gap-1 px-4 py-3 font-label-m place-self-start bg-green-500 text-white"
              href="/product/voice"
            >
              Learn more
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-2 md:gap-4 gap-y-6">
          {/* Video Player */}
          <div className="relative col-span-12 md:col-span-7 md:row-start-1 md:col-start-1">
            <figure className="relative aspect-square overflow-hidden rounded-2xl bg-gray-200">
              <div className="h-full w-full bg-gray-100"></div>
              <div style={{opacity: 1}}>
                <div className="absolute inset-0">
                  {/* Video placeholder with audio waveform visualization */}
                  <div className="block h-full w-full pointer-events-none absolute object-cover bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="h-full w-full flex items-center justify-center p-8">
                      <div className="w-full max-w-md">
                        {/* Audio Waveform Visualization */}
                        <div className="flex items-end justify-center gap-1 h-32 mb-8">
                          {Array.from({length: 50}, (_, i) => (
                            <div 
                              key={i}
                              className="bg-gray-400 rounded-sm transition-all duration-300"
                              style={{
                                width: '3px',
                                height: `${Math.random() * 60 + 20}px`,
                                animationDelay: `${i * 50}ms`,
                                animation: 'waveform 1.5s ease-in-out infinite'
                              }}
                            />
                          ))}
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-8 h-8 text-green-500"
                            >
                              <path
                                d="M13 3.75003C13 3.47584 12.8504 3.22366 12.61 3.09204C12.3697 2.96055 12.0766 2.97054 11.8457 3.11823L5.7806 7.00001H1.75005C1.33573 7.00001 1 7.33576 1 7.74994V16.2499C1 16.6642 1.33573 17 1.75005 17H5.7806L11.8457 20.8816C12.0766 21.0295 12.3697 21.0395 12.61 20.9078C12.8504 20.7763 13 20.524 13 20.25V3.75003Z"
                                fill="currentColor"
                              />
                              <path
                                d="M18.7197 4.22156C19.0125 3.92875 19.4875 3.92875 19.7803 4.22156C21.7702 6.21133 23.0022 8.96235 23.0022 11.9997C23.0022 15.0371 21.7702 17.7881 19.7803 19.7779C19.4875 20.0708 19.0125 20.0708 18.7197 19.7779C18.4268 19.4851 18.4268 19.0101 18.7197 18.7173C20.4396 16.9973 21.5022 14.6233 21.5022 11.9997C21.5022 9.37626 20.4396 7.00229 18.7197 5.28226C18.4268 4.98931 18.4268 4.51451 18.7197 4.22156Z"
                                fill="currentColor"
                              />
                              <path
                                d="M16.4191 7.58289C16.1261 7.29008 15.6512 7.29008 15.3584 7.58289C15.0654 7.87584 15.0654 8.35077 15.3584 8.64359C16.2187 9.50407 16.7496 10.6905 16.7496 12.0024C16.7496 13.3143 16.2187 14.5007 15.3584 15.3612C15.0654 15.654 15.0654 16.1289 15.3584 16.4217C15.6512 16.7147 16.1261 16.7147 16.4191 16.4217C17.5492 15.2915 18.2495 13.7281 18.2495 12.0024C18.2495 10.2767 17.5492 8.71311 16.4191 7.58289Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-600 font-medium">Voice AI Agent</p>
                          <p className="text-sm text-gray-500">Real-time audio processing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Controls */}
                  <div className="group/controls absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col gap-2 px-2 pb-2 md:px-4 md:pb-4 justify-end" style={{pointerEvents: 'auto', opacity: 1}}>
                    <div className="pointer-events-none z-10 flex w-full items-center justify-start gap-2">
                      <div className="flex items-center gap-2">
                        <button 
                          className="group/control pointer-events-auto z-10 items-center justify-center rounded-full p-1 md:bottom-4 md:left-4 flex transition-opacity h-10 w-10 bg-white text-green-500 hover:bg-gray-50 hover:text-green-600 disabled:bg-gray-400/6 disabled:text-gray-400" 
                          type="button" 
                          aria-label="Play video"
                        >
                          <span className="rounded-full p-2 transition">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current h-4 w-4">
                              <path d="M21 12L6 3V21L21 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          className="group/control pointer-events-auto z-10 inline-flex items-center justify-center rounded-full p-1 md:bottom-4 md:left-4 h-10 w-10 bg-white text-green-500 hover:bg-gray-50 hover:text-green-600 disabled:bg-gray-400/6 disabled:text-gray-400" 
                          type="button" 
                          aria-label="Mute audio"
                        >
                          <span className="rounded-full p-2 transition">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current h-4 w-4">
                              <path d="M13 3.75003C13 3.47584 12.8504 3.22366 12.61 3.09204C12.3697 2.96055 12.0766 2.97054 11.8457 3.11823L5.7806 7.00001H1.75005C1.33573 7.00001 1 7.33576 1 7.74994V16.2499C1 16.6642 1.33573 17 1.75005 17H5.7806L11.8457 20.8816C12.0766 21.0295 12.3697 21.0395 12.61 20.9078C12.8504 20.7763 13 20.524 13 20.25V3.75003Z" fill="currentColor"></path>
                              <path d="M18.7197 4.22156C19.0125 3.92875 19.4875 3.92875 19.7803 4.22156C21.7702 6.21133 23.0022 8.96235 23.0022 11.9997C23.0022 15.0371 21.7702 17.7881 19.7803 19.7779C19.4875 20.0708 19.0125 20.0708 18.7197 19.7779C18.4268 19.4851 18.4268 19.0101 18.7197 18.7173C20.4396 16.9973 21.5022 14.6233 21.5022 11.9997C21.5022 9.37626 20.4396 7.00229 18.7197 5.28226C18.4268 4.98931 18.4268 4.51451 18.7197 4.22156Z" fill="currentColor"></path>
                              <path d="M16.4191 7.58289C16.1261 7.29008 15.6512 7.29008 15.3584 7.58289C15.0654 7.87584 15.0654 8.35077 15.3584 8.64359C16.2187 9.50407 16.7496 10.6905 16.7496 12.0024C16.7496 13.3143 16.2187 14.5007 15.3584 15.3612C15.0654 15.654 15.0654 16.1289 15.3584 16.4217C15.6512 16.7147 16.1261 16.7147 16.4191 16.4217C17.5492 15.2915 18.2495 13.7281 18.2495 12.0024C18.2495 10.2767 17.5492 8.71311 16.4191 7.58289Z" fill="currentColor"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </div>
          
          {/* Features List */}
          <div className="relative col-span-12 md:col-span-4 md:row-start-1 md:col-start-9">
            <ul className="flex flex-col gap-8">
              <li className="flex flex-col gap-1">
                <h3 className="flex gap-2 font-body-s text-black py-0 xl:py-0">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-icon-body-s h-5 w-5 shrink-0 text-green-500">
                    <path d="M18 18.5H14V21.5H7C7 18.9758 7.1347 16.9146 5.48913 14.8168C4.55625 13.6275 4 12.1287 4 10.5C4 6.63401 7.13401 3.5 11 3.5C13.8499 3.5 16.4738 4.86784 17.5555 7.63279C18.3134 9.57024 19.3382 10.7573 20.5 12.5L18 14V18.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                  </svg>
                  Engage with faster, better phone calls
                </h3>
                <p className="pr-4 font-body-s whitespace-pre-line text-gray-600 md:pr-0">
                  Your agent delivers delightful and personalized conversations. Always available, endlessly patient, and able to reason, predict, and act in real-time.
                </p>
              </li>
              
              <li className="flex flex-col gap-1">
                <h3 className="flex gap-2 font-body-s text-black py-0 xl:py-0">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-icon-body-s h-5 w-5 shrink-0 text-green-500">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C9.79086 21 8 16.9706 8 12C8 7.02944 9.79086 3 12 3M12 21C14.2091 21 16 16.9706 16 12C16 7.02944 14.2091 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                  </svg>
                  Connect to your call center ecosystem
                </h3>
                <p className="pr-4 font-body-s whitespace-pre-line text-gray-600 md:pr-0">
                  Seamlessly integrate with your existing technology stack, with comprehensive summaries and intelligent routing when escalation is required.
                </p>
              </li>
              
              <li className="flex flex-col gap-1">
                <h3 className="flex gap-2 font-body-s text-black py-0 xl:py-0">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-icon-body-s h-5 w-5 shrink-0 text-green-500">
                    <path d="M8 4.5V20.5M4 10.5V14.5M12 8.5V16.5M16 6.5V18.5M20 10.5V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square"></path>
                  </svg>
                  Scale consistent experiences on every channel
                </h3>
                <p className="pr-4 font-body-s whitespace-pre-line text-gray-600 md:pr-0">
                  Use Agent OS to build once and run everywhere, with a continuously-improving, trusted AI agent tailored to your brand, goals, and processes.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
