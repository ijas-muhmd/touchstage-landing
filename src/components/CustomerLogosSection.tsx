'use client';

export default function CustomerLogosSection() {
  const logos = [
    { name: 'SoFi', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F7cb80852c1623daa047343d1fb87e1f0a8fbf776-64x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 64, height: 40 },
    { name: 'SiriusXM', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F867856becae005fda9feec30c24d183cf52943c7-98x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/siriusxm', width: 98, height: 40 },
    { name: 'Wayfair', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F222c7ceab6b965412d6698f8b60a60c54d61fbb4-92x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 92, height: 40 },
    { name: 'Minted', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F97496d1c4606ded0d6fb08ff98cbfbc5d7b09cbe-78x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/minted', width: 78, height: 40 },
    { name: 'Deliveroo', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F2194ebc8206d75748dd494aa3c2692b744194dce-110x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 110, height: 40 },
    { name: 'The North Face', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F07df205857a05296c43ea8f5cd497b08c81eae1e-58x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 58, height: 40 },
    { name: 'AOL', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F56eb7851363bab43c58e9d96c6e5a81f3b212fe9-54x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/aol', width: 54, height: 40 },
    { name: 'Discord', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3df6d006ff89885bae8c40829e196b542e638963-110x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 110, height: 40 },
    { name: 'Brex', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F061293092548b3af8fdbd5d86e220c491a092230-72x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 72, height: 40 },
    { name: 'DIRECTV', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F3ddb44b9f51e0947a263775a83ddedf6a954cc2f-84x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 84, height: 40 },
    { name: 'Casper', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fea9a9b10433f9736610203321680447cc88cf530-212x110.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/casper', width: 212, height: 40 },
    { name: 'Bumble', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F8e5b0ddacf7764085d4416c61098005f73968b15-94x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 94, height: 40 },
    { name: 'ThirdLove', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fdef045f4f86af727a22bead48535bdefc2834d8a-102x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/thirdlove', width: 102, height: 40 },
    { name: 'Sweetgreen', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F72ad9c5fca1e71b6cb6e2782514a4c8a5da7661a-110x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 110, height: 40 },
    { name: 'ADT', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F47db624980b85dec2e742c5f5e81a8f291215f5d-42x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/adt', width: 42, height: 40 },
    { name: 'Marshmallow', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fcce6dda6ca08f1ed1070900a47ace1da24ebd00c-144x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/marshmallow', width: 144, height: 40 },
    { name: 'BISSELL', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F225de79a74b13a1791007f8284d55c7d1fbff9fa-46x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 46, height: 40 },
    { name: 'Sun & Ski Sports', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F14b597f9121dec0d4f64adee7670e9061a8a8c50-260x110.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 260, height: 40 },
    { name: 'CDW', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fbf94954542e9c1bd1fe657d882638a0f944438c5-62x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/cdw', width: 62, height: 40 },
    { name: 'Sonos', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fecd995e2842632b72224900f5ea610b98441d435-78x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/sonos', width: 78, height: 40 },
    { name: 'CLEAR', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F87805b8878533ea3f8125ea378b8c7c8ba511dcb-100x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/clear', width: 100, height: 40 },
    { name: 'Ramp', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fb8f0879257d686a8e46adf74245aa8014545bc6e-86x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/ramp', width: 86, height: 40 },
    { name: 'Rivian', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fc170f21df15c002c61fdc40b0610a2986387b821-118x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 118, height: 40 },
    { name: 'WeightWatchers', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fd3f63ac832769f3a6a7b8bb9261e0c5c4d3833cd-146x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers/weightwatchers', width: 146, height: 40 },
    { name: 'Timberland', src: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Ff442dc176538cf596d398bf2adc825e313db4473-96x40.svg%3Fauto%3Dformat&width=3840&quality=90', href: '/customers', width: 96, height: 40 }
  ];

  return (
    <section className="relative bg-white py-6 md:py-6 xl:py-12" style={{zIndex: 7}}>
      <div className="mx-auto w-full max-w-[1160px] px-4 md:px-6">
        <div className="flex flex-col gap-12 md:gap-16 xl:gap-20 items-center justify-center">
          <div className="group/container relative w-full py-2">
            <ul className="flex flex-nowrap">
              <li className="grid w-full grow items-center gap-x-6 gap-y-12 md:gap-x-4 md:gap-y-16 grid-cols-3 lg:grid-cols-5">
                {logos.map((logo, index) => (
                  <div key={index} className="flex justify-center px-[10px]">
                    <a 
                      className="group relative flex items-center justify-center rounded-lg focus:outline-none h-[32px] w-[114px] md:h-[40px] md:w-[200px]" 
                      aria-label={`Read the customer story about ${logo.name}`} 
                      href={logo.href}
                    >
                      <img 
                        alt={`${logo.name} Logo`} 
                        loading="lazy" 
                        width={logo.width} 
                        height={logo.height} 
                        className="block h-full w-auto transition-[filter] group-hover/container:filter-none group-focus-visible/container:filter-none group-active/container:filter-none lg:filter-uniform-30 object-contain grayscale hover:grayscale-0" 
                        src={logo.src}
                      />
                    </a>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
