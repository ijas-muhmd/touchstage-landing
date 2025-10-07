'use client';

export default function CTASection() {
  return (
    <section className="relative bg-white py-12 md:py-16 xl:py-18" style={{zIndex: 1}}>
      <div className="mx-auto w-full max-w-[1160px] px-4 md:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h2 className="w-full text-center font-headline-l text-black">
            See what Sierra can do for you
          </h2>
          <p className="mx-auto w-full max-w-prose text-center font-body-s text-balance whitespace-pre-wrap text-gray-400 xl:max-w-[560px]">
            Find out how Sierra can help your business build better, more human customer experiences with AI.
          </p>
          <div className="flex justify-center gap-2">
            <a 
              className="inline-flex cursor-pointer items-center justify-between rounded-full outline-hidden disabled:cursor-not-allowed transition-all duration-150 focus:bg-green-400 hover:bg-green-400 focus-visible:bg-green-400 active:bg-green-600 disabled:bg-gray-400 gap-1 px-4 py-3 font-label-m bg-green-500 text-white"
              href="/learn-more"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
