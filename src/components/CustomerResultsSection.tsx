'use client';

interface Metric {
  label: string;
  value: string;
  hasIcon?: boolean;
}

interface Customer {
  id: string;
  name: string;
  logo: string;
  image: string;
  metrics: Metric[];
  description: string;
  href: string;
}

export default function CustomerResultsSection() {
  const customers: Customer[] = [
    {
      id: 'sonos',
      name: 'Sonos',
      logo: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fecd995e2842632b72224900f5ea610b98441d435-78x40.svg%3Fauto%3Dformat&width=3840&quality=90',
      image: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fd4e016f289e2ee15bf7488f3d8faba59ed94b4d1-745x745.png%3Fauto%3Dformat&width=3840&quality=90',
      metrics: [
        { label: 'Customers', value: '15 Million' }
      ],
      description: 'How Sonos elevates the listener experience with Sierra.',
      href: '/customers/sonos'
    },
    {
      id: 'siriusxm',
      name: 'SiriusXM',
      logo: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F867856becae005fda9feec30c24d183cf52943c7-98x40.svg%3Fauto%3Dformat&width=3840&quality=90',
      image: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F43f37f83ed8e8a771b96ef7d9efe807ebbf71b0c-745x745.png%3Fauto%3Dformat&width=3840&quality=90',
      metrics: [
        { label: 'Subscribers', value: '34 Million' }
      ],
      description: 'How SiriusXM increases listener loyalty with Sierra.',
      href: '/customers/siriusxm'
    },
    {
      id: 'casper',
      name: 'Casper',
      logo: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2Fea9a9b10433f9736610203321680447cc88cf530-212x110.svg%3Fauto%3Dformat&width=3840&quality=90',
      image: 'https://sierra.ai/-/cdn/image?src=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fca4jck6w%2Fproduction%2F1ac4ce219f57cd7103873078120f5c01ba6bbb20-745x745.png%3Fauto%3Dformat&width=3840&quality=90',
      metrics: [
        { label: 'Resolution Rate', value: '74%', hasIcon: true },
        { label: 'Increase in CSAT', value: '>20%', hasIcon: true }
      ],
      description: 'How Casper turns a big purchase into a lifelong relationship with AI.',
      href: '/customers/casper'
    }
  ];

  return (
    <section className="relative bg-white py-12 md:py-16 xl:py-18" style={{zIndex: 1}}>
      <div className="mx-auto w-full max-w-[1160px] px-4 md:px-6">
        {/* Header */}
        <div className="grid grid-cols-12 gap-2 md:gap-4 pb-8 md:pb-14">
          <h2 className="col-span-12 font-headline-l text-black xl:col-span-8 xl:row-start-1">
            The results speak for themselves
          </h2>
          <div className="col-span-12 row-start-2 xl:col-span-8">
            <p className="font-body-s whitespace-pre-wrap text-gray-400 md:max-w-xl">
              Sierra is trusted by leading consumer brands with millions of customers across a wide range of industries.
            </p>
          </div>
          <div className="col-span-12 row-start-3 flex min-w-[170px] pt-2 xl:col-span-3 xl:col-start-10 xl:row-start-1 xl:items-end xl:justify-end xl:place-self-end">
            <a
              className="inline-flex cursor-pointer items-center justify-between rounded-full outline-hidden disabled:cursor-not-allowed transition-all duration-150 focus:bg-green-400 hover:bg-green-400 focus-visible:bg-green-400 active:bg-green-600 disabled:bg-gray-400 gap-1 px-4 py-3 font-label-m place-self-start bg-green-500 text-white"
              href="/customers"
            >
              Our customers
            </a>
          </div>
        </div>

        {/* Customer Cards */}
        <div className="grid grid-cols-12 gap-2 md:gap-4 gap-y-8 xl:gap-y-14">
          {customers.map((customer) => (
            <div key={customer.id} className="col-span-12 md:col-span-6 xl:col-span-4">
              <a 
                className="group block rounded-3xl outline-hidden focus-visible:border-4 focus-visible:border-green-800 focus-visible:p-2" 
                href={customer.href}
              >
                <figure className="bg-vignette relative mb-3 aspect-square overflow-hidden rounded-2xl bg-gray-100 after:opacity-0 after:transition-opacity group-hover:after:opacity-100 xl:mb-4">
                  <img 
                    alt={`${customer.name} customer image`}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-cover transition-transform group-hover:scale-105" 
                    style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}}
                    src={customer.image}
                  />
                  
                  {/* Logo and Metrics Overlay */}
                  <div className="absolute z-10 flex h-full w-full flex-col justify-end p-4 md:p-6">
                    {/* Logo */}
                    <img 
                      alt={`${customer.name} Logo`}
                      loading="lazy"
                      width="78"
                      height="40"
                      decoding="async"
                      className="block absolute top-1/2 left-1/2 h-18 w-auto -translate-x-1/2 -translate-y-1/2 brightness-0 invert xl:h-[88px]" 
                      style={{color: 'transparent'}}
                      src={customer.logo}
                    />
                    
                    {/* Metrics */}
                    <ul className="flex gap-2 xl:gap-4">
                      {customer.metrics.map((metric, index) => (
                        <li key={index} className="flex w-full flex-col justify-end gap-1">
                          <p className="font-label-m text-gray-100">{metric.label}</p>
                          <span className="flex items-center gap-2 font-body-l leading-none tabular-nums text-white">
                            {metric.hasIcon && (
                              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[3px] h-5 w-5 md:mt-[4px] xl:mt-[5px]">
                                <path d="M16 7H21V12M20.5 7.5L13 15L9 11L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            )}
                            {metric.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </figure>
                
                {/* Description */}
                <div className="pr-6 text-left font-body-l text-gray-350 transition-colors group-hover:text-black">
                  {customer.description}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
