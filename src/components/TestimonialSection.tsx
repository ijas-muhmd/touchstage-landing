'use client';

export default function TestimonialSection() {
  return (
    <section className="relative bg-white md:py-16 xl:py-18 overflow-x-hidden py-0" style={{zIndex: 5}}>
      <div className="mx-auto w-full max-w-[1160px] md:px-6 px-0">
        <div className="relative isolate overflow-hidden px-4 md:px-6 xl:px-24 bg-gray-100 py-12 md:rounded-4xl md:py-16 xl:py-20">
          <article className="relative isolate flex flex-col gap-6 overflow-hidden rounded-4xl p-6 md:flex-row xl:gap-8 xl:p-8 bg-white z-10">
            <div className="flex w-full grow flex-col justify-between aspect-[5/4] md:aspect-[648/176]">
              <img 
                alt="WeightWatchers Logo" 
                loading="lazy" 
                width="146" 
                height="40" 
                decoding="async" 
                className="block mb-2 h-[38px] w-auto place-self-start object-contain md:h-10 filter-black" 
                style={{color:"transparent"}} 
                sizes="(min-width: 769px) 20vw, 40vw" 
                src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fd3f63ac832769f3a6a7b8bb9261e0c5c4d3833cd-146x40.svg%3Fauto%3Dformat&width=3840&quality=90"
              />
              <blockquote className="relative max-w-prose grow pr-4 font-body-m xl:font-headline-s text-gray-700">
                &ldquo;I knew the AI agent would answer questions quickly, but I didn&apos;t expect the responses to be so genuine and empathetic.&rdquo;
              </blockquote>
              <div className="flex justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <figure className="relative hidden aspect-square h-10 w-10 shrink-0 overflow-hidden rounded-sm sm:block">
                    <img 
                      alt="Headshot of Maureen Martin" 
                      loading="lazy" 
                      decoding="async" 
                      className="block h-auto w-full object-cover bg-gray-300" 
                      style={{position:"absolute",height:"100%",width:"100%",left:"0",top:"0",right:"0",bottom:"0",color:"transparent"}} 
                      sizes="(min-width: 769px) 75vw, 100vw" 
                      src="https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F95d87e167f832084288f50b1c7e02ef2aaf0061d-1041x780.png%3Fauto%3Dformat&width=3840&quality=90"
                    />
                  </figure>
                  <div className="flex flex-col flex-wrap place-self-center font-label-m md:place-self-end">
                    <p className="text-gray-700">Maureen Martin</p>
                    <p className="text-gray-350">VP of Customer Care, WeightWatchers</p>
                  </div>
                </div>
                <a 
                  className="inline-flex cursor-pointer items-center justify-between rounded-full outline-hidden disabled:cursor-not-allowed transition-all duration-150 focus:bg-green-400 hover:bg-green-400 focus-visible:bg-green-400 active:bg-green-600 disabled:bg-gray-400 gap-1 px-4 py-3 font-label-m shrink-0 place-self-end bg-green-500 text-white"
                  aria-label="Read more about How WeightWatchers embraces AI to engage members with empathy, at scale, with Sierra."
                  href="/customers/weightwatchers"
                >
                  Full story
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[1em] w-[1em] -rotate-90">
                    <path d="M20 9L12 17L4 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
