'use client';

export default function FooterSection() {
  const navigationSections = [
    {
      title: 'Product',
      links: [
        { label: 'Product overview', href: '/product' },
        { label: 'Meet your agent', href: '/product/meet-your-agent' },
        { label: 'Develop', href: '/product/develop-your-agent' },
        { label: 'Configure', href: '/product/configure-your-agent' },
        { label: 'Optimize', href: '/product/optimize-your-agent' },
        { label: 'Voice', href: '/product/voice' },
        { label: 'Trust and reliability', href: '/product/trust-and-reliability' }
      ]
    },
    {
      title: 'Industries',
      links: [
        { label: 'Industries overview', href: '/industries' },
        { label: 'Financial services', href: '/industries/financial-services' },
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Telecommunications', href: '/industries/telecommunications' },
        { label: 'Media', href: '/industries/media' },
        { label: 'Travel and hospitality', href: '/industries/travel-transportation-hospitality' },
        { label: 'Retail and consumer goods', href: '/industries/retail' },
        { label: 'Technology', href: '/industries/technology' }
      ]
    },
    {
      title: 'Customers',
      links: [
        { label: 'Customer stories', href: '/customers' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
        { label: 'Resources', href: '/resources' },
        { label: 'Careers', href: '/careers' },
        { label: 'Trust Center', href: 'https://trust.sierra.ai/', external: true }
      ]
    }
  ];

  const socialLinks = [
    { label: 'Linkedin', href: 'https://www.linkedin.com/company/sierra', icon: 'linkedin' },
    { label: 'X', href: 'https://x.com/sierraplatform', icon: 'x' },
    { label: 'Youtube', href: 'https://www.youtube.com/@Sierra-Platform', icon: 'youtube' }
  ];

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'linkedin':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
            <path d="M19.65 3H4.35C3.99196 3 3.64858 3.14223 3.39541 3.39541C3.14223 3.64858 3 3.99196 3 4.35V19.65C3 20.008 3.14223 20.3514 3.39541 20.6046C3.64858 20.8578 3.99196 21 4.35 21H19.65C20.008 21 20.3514 20.8578 20.6046 20.6046C20.8578 20.3514 21 20.008 21 19.65V4.35C21 3.99196 20.8578 3.64858 20.6046 3.39541C20.3514 3.14223 20.008 3 19.65 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.625C6.74056 8.61616 6.4406 8.51632 6.18758 8.33797C5.93456 8.15962 5.7397 7.91066 5.62737 7.6222C5.51503 7.33374 5.49019 7.01857 5.55595 6.71607C5.6217 6.41358 5.77515 6.13716 5.9971 5.92138C6.21906 5.70559 6.49968 5.55999 6.80391 5.50278C7.10814 5.44556 7.42248 5.47927 7.70766 5.59969C7.99284 5.7201 8.23622 5.92189 8.40737 6.17983C8.57853 6.43778 8.66987 6.74044 8.67 7.05C8.66289 7.47331 8.4885 7.8766 8.18495 8.17173C7.88139 8.46685 7.47335 8.62982 7.05 8.625ZM18.3 18.3H15.6V14.034C15.6 12.756 15.06 12.297 14.358 12.297C14.1522 12.3107 13.9511 12.3649 13.7663 12.4566C13.5815 12.5482 13.4166 12.6755 13.2811 12.831C13.1457 12.9866 13.0422 13.1674 12.9768 13.363C12.9114 13.5586 12.8853 13.7652 12.9 13.971C12.8955 14.0129 12.8955 14.0551 12.9 14.097V18.3H10.2V10.2H12.81V11.37C13.0733 10.9695 13.435 10.6433 13.8605 10.4227C14.286 10.2021 14.761 10.0944 15.24 10.11C16.635 10.11 18.264 10.884 18.264 13.404L18.3 18.3Z" fill="currentColor"></path>
          </svg>
        );
      case 'x':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
            <path d="M17.728 3H20.7815L14.1105 10.6246L21.9585 21H15.8135L11.0006 14.7074L5.49354 21H2.43815L9.57354 12.8446L2.04492 3H8.34585L12.6963 8.75169L17.728 3ZM16.6563 19.1723H18.3483L7.42646 4.73169H5.61077L16.6563 19.1723Z" fill="currentColor"></path>
          </svg>
        );
      case 'youtube':
        return (
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.2043 4.00776C21.1084 4.28763 21.8189 5.10925 22.0609 6.15475C22.4982 8.04786 22.5 12 22.5 12C22.5 12 22.5 15.9522 22.0609 17.8453C21.8189 18.8908 21.1084 19.7124 20.2043 19.9922C18.5673 20.5 12 20.5 12 20.5C12 20.5 5.43274 20.5 3.79568 19.9922C2.89159 19.7124 2.1811 18.8908 1.93908 17.8453C1.5 15.9522 1.5 12 1.5 12C1.5 12 1.5 8.04786 1.93908 6.15475C2.1811 5.10925 2.89159 4.28763 3.79568 4.00776C5.43274 3.5 12 3.5 12 3.5C12 3.5 18.5673 3.5 20.2043 4.00776ZM15.5134 12.0003L9.79785 15.2999V8.70065L15.5134 12.0003Z" fill="currentColor"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-200">
      <div className="mx-auto w-full max-w-[1160px] px-4 md:px-6 flex h-full flex-col justify-between gap-20 md:gap-[120px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-12 gap-2 md:gap-4 gap-y-8 pt-6 xl:pt-14">
          {/* Sierra Logo - Desktop */}
          <div className="col-span-12 hidden md:col-span-4 md:block">
            <a 
              aria-label="Homepage" 
              className="block place-self-start focus:text-green-500 outline-hidden transition-colors active:text-green-300 md:pl-2 xl:pl-0 text-green-500" 
              href="/"
            >
              <svg viewBox="0 0 59 67" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-9 xl:h-11">
                <path d="M6.79411 33.4373C3.92187 33.9958 -1.81912 38.059 0.566563 50.1542C9.84075 58.2701 16.227 55.3257 18.1471 53.1161C17.1949 55.8859 17.8401 62.8935 29.5 66.8729C41.1599 62.8935 41.8051 55.8859 40.8529 53.1161C42.773 55.3257 49.161 58.2701 58.4334 50.1542C60.8191 38.059 55.0781 33.9958 52.2059 33.4373C55.0781 32.8788 60.8191 28.8139 58.4334 16.7187C49.1592 8.6028 42.773 11.5472 40.8529 13.7568C41.8051 10.9869 41.1599 3.97938 29.5 0C17.8401 3.97938 17.1949 10.9869 18.1471 13.7568C16.227 11.5472 9.84075 8.6028 0.566563 16.7187C-1.81912 28.8139 3.92187 32.8788 6.79411 33.4373ZM53.2243 19.7276C55.7199 24.0543 55.0816 29.5626 51.6879 33.1999C49.4086 26.7457 45.5912 25.222 42.4242 25.9672C44.653 23.5953 45.2441 19.5252 40.7989 14.3223C45.6435 13.1983 50.7288 15.3992 53.2261 19.7259L53.2243 19.7276ZM38.823 33.4373C40.1798 32.9486 43.066 31.7705 42.126 26.4175C45.1622 27.3775 47.2688 30.2311 47.2688 33.4373C47.2688 36.6418 45.1622 39.4971 42.126 40.4571C43.066 35.1041 40.1798 33.9277 38.823 33.4373ZM16.8722 40.4571C13.8361 39.4971 11.7294 36.6435 11.7294 33.4373C11.7294 30.2329 13.8361 27.3775 16.8722 26.4175C15.934 31.7705 18.8185 32.9469 20.1752 33.4373C18.8185 33.926 15.9323 35.1041 16.8722 40.4571ZM24.8385 25.3564C23.7363 24.4261 21.2757 22.5114 17.1129 26.0021C16.4258 22.8902 17.8419 19.6369 20.6147 18.0346C23.3875 16.4324 26.9103 16.8304 29.2593 18.9824C24.1584 20.8446 24.5821 23.9339 24.8367 25.3546L24.8385 25.3564ZM17.1129 40.8725C21.2757 44.3632 23.7363 42.4503 24.8385 41.5182C24.5839 42.939 24.1584 46.0282 29.2611 47.8905C26.912 50.0425 23.3893 50.4404 20.6165 48.8382C17.8436 47.236 16.4258 43.9827 17.1147 40.8707L17.1129 40.8725ZM25.1105 41.0487C23.0789 41.6142 20.9757 40.691 19.9695 38.9456C18.9632 37.2003 19.2161 34.9156 20.7211 33.4373C19.2161 31.9607 18.9632 29.6743 19.9695 27.929C20.9757 26.1837 23.0806 25.2604 25.1105 25.8259C25.6355 23.7821 27.4875 22.4207 29.5017 22.4207C31.516 22.4207 33.3663 23.7821 33.8929 25.8259C35.9246 25.2604 38.0278 26.1837 39.034 27.929C40.0403 29.6743 39.7874 31.959 38.2824 33.4373C39.7874 34.9139 40.0403 37.2003 39.034 38.9456C38.0278 40.691 35.9229 41.6142 33.8929 41.0487C33.368 43.0925 31.516 44.4539 29.5017 44.4539C27.4875 44.4539 25.6372 43.0925 25.1105 41.0487ZM29.7407 18.9841C32.0897 16.8321 35.6124 16.4342 38.3853 18.0364C41.1581 19.6386 42.5759 22.8919 41.8871 26.0039C37.7243 22.5132 35.2637 24.4261 34.1615 25.3581C34.4161 23.9374 34.8416 20.8481 29.7389 18.9859L29.7407 18.9841ZM34.1632 41.52C35.2654 42.4503 37.7261 44.3649 41.8888 40.8742C42.5759 43.9862 41.1599 47.2395 38.387 48.8417C35.6142 50.4439 32.0915 50.046 29.7424 47.894C34.8434 46.0317 34.4196 42.9424 34.165 41.5217L34.1632 41.52ZM29.5017 6.02144C34.4946 6.02144 38.9416 9.33061 40.3908 14.0902C33.6662 12.8388 30.44 15.3852 29.5017 18.5024C28.5635 15.3852 25.3355 12.837 18.6109 14.0884C20.0619 9.32886 24.5089 6.01969 29.5 6.01969L29.5017 6.02144ZM7.31031 33.1999C3.91664 29.5626 3.27662 24.0543 5.77392 19.7276C8.26947 15.4009 13.3565 13.2 18.2011 14.324C13.7559 19.5269 14.347 23.5971 16.5758 25.969C13.4088 25.2237 9.59137 26.7457 7.31206 33.2017L7.31031 33.1999ZM7.31031 33.6729C9.58962 40.1272 13.4071 41.6491 16.574 40.9039C14.3453 43.2758 13.7541 47.3459 18.1994 52.5488C13.3548 53.6728 8.26947 51.4719 5.77217 47.1452C3.27662 42.8185 3.9149 37.3102 7.30857 33.6729H7.31031ZM29.4983 60.8549C24.5054 60.8549 20.0584 57.5475 18.6092 52.7862C25.3338 54.0376 28.56 51.4894 29.5 48.3722C30.4382 51.4894 33.6645 54.0376 40.3891 52.7862C38.9381 57.5457 34.4911 60.8549 29.5 60.8549H29.4983ZM53.2243 47.1452C50.7288 51.4719 45.6418 53.6728 40.7971 52.5488C45.2424 47.3459 44.6512 43.2758 42.4225 40.9039C45.5894 41.6491 49.4069 40.1272 51.6862 33.6729C55.0799 37.3102 55.7199 42.8185 53.2226 47.1452H53.2243ZM33.8895 35.9733V30.8996L29.4983 28.3618L25.1071 30.8996V35.9733L29.4983 38.511L33.8895 35.9733Z" fill="currentColor"></path>
              </svg>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="col-span-12 grid grid-cols-subgrid gap-y-12 md:col-span-8">
            {navigationSections.map((section, index) => (
              <div key={section.title} className="col-span-6 flex flex-col gap-6 md:col-span-2">
                <h3 className="font-label-m text-black">{section.title}</h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        tabIndex={0}
                        className="cursor-pointer focus:text-green-500 font-label-m text-gray-400 transition-colors hover:text-green-500 active:text-black"
                        href={link.href}
                        {...(link.external && { rel: 'noopener noreferrer', target: '_blank' })}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mb-6 flex flex-col justify-between gap-10 font-label-m text-gray-350 md:flex-row md:items-end md:pb-6">
          <div className="flex w-full flex-col gap-4 xl:gap-6">
            {/* Language Selector */}
            <nav className="relative flex w-full flex-1" aria-label="Language switcher">
              <div className="w-full">
                <span className="sr-only">Select language</span>
                <button 
                  className="group relative flex min-w-[256px] items-center justify-between gap-6 border text-black transition-colors h-11 rounded-lg border-transparent bg-gray-100 px-4 w-full md:w-auto"
                  type="button"
                  tabIndex={0}
                  aria-haspopup="listbox"
                  aria-expanded="false"
                >
                  <span className="font-body-s">
                    <span className="flex items-center gap-2">
                      United States<span className="font-medium">English</span>
                    </span>
                  </span>
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform group-data-pressed:-rotate-180">
                      <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </nav>

            {/* Copyright and Legal Links */}
            <div className="grid w-full grid-cols-2 gap-4 md:flex md:flex-row md:items-center">
              <div>© 2025 Sierra</div>
              <nav>
                <ul className="flex flex-col gap-4 md:flex-row md:items-center">
                  <li>
                    <a 
                      tabIndex={0}
                      className="cursor-pointer focus:text-green-500 font-label-m text-gray-400 transition-colors hover:text-green-500 active:text-black"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a 
                      tabIndex={0}
                      className="cursor-pointer focus:text-green-500 font-label-m text-gray-400 transition-colors hover:text-green-500 active:text-black"
                      href="/terms-and-conditions"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a 
                      tabIndex={0}
                      className="cursor-pointer focus:text-green-500 font-label-m text-gray-400 transition-colors hover:text-green-500 active:text-black"
                      href="#manage-cookies"
                    >
                      Cookie Preferences
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Mobile Logo and Social Media */}
          <div className="flex justify-between">
            {/* Mobile Sierra Logo */}
            <a 
              aria-label="Homepage" 
              className="focus:text-green-500 outline-hidden active:text-green-300 md:hidden text-green-500" 
              href="/"
            >
              <svg viewBox="0 0 59 67" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10">
                <path d="M6.79411 33.4373C3.92187 33.9958 -1.81912 38.059 0.566563 50.1542C9.84075 58.2701 16.227 55.3257 18.1471 53.1161C17.1949 55.8859 17.8401 62.8935 29.5 66.8729C41.1599 62.8935 41.8051 55.8859 40.8529 53.1161C42.773 55.3257 49.161 58.2701 58.4334 50.1542C60.8191 38.059 55.0781 33.9958 52.2059 33.4373C55.0781 32.8788 60.8191 28.8139 58.4334 16.7187C49.1592 8.6028 42.773 11.5472 40.8529 13.7568C41.8051 10.9869 41.1599 3.97938 29.5 0C17.8401 3.97938 17.1949 10.9869 18.1471 13.7568C16.227 11.5472 9.84075 8.6028 0.566563 16.7187C-1.81912 28.8139 3.92187 32.8788 6.79411 33.4373ZM53.2243 19.7276C55.7199 24.0543 55.0816 29.5626 51.6879 33.1999C49.4086 26.7457 45.5912 25.222 42.4242 25.9672C44.653 23.5953 45.2441 19.5252 40.7989 14.3223C45.6435 13.1983 50.7288 15.3992 53.2261 19.7259L53.2243 19.7276ZM38.823 33.4373C40.1798 32.9486 43.066 31.7705 42.126 26.4175C45.1622 27.3775 47.2688 30.2311 47.2688 33.4373C47.2688 36.6418 45.1622 39.4971 42.126 40.4571C43.066 35.1041 40.1798 33.9277 38.823 33.4373ZM16.8722 40.4571C13.8361 39.4971 11.7294 36.6435 11.7294 33.4373C11.7294 30.2329 13.8361 27.3775 16.8722 26.4175C15.934 31.7705 18.8185 32.9469 20.1752 33.4373C18.8185 33.926 15.9323 35.1041 16.8722 40.4571ZM24.8385 25.3564C23.7363 24.4261 21.2757 22.5114 17.1129 26.0021C16.4258 22.8902 17.8419 19.6369 20.6147 18.0346C23.3875 16.4324 26.9103 16.8304 29.2593 18.9824C24.1584 20.8446 24.5821 23.9339 24.8367 25.3546L24.8385 25.3564ZM17.1129 40.8725C21.2757 44.3632 23.7363 42.4503 24.8385 41.5182C24.5839 42.939 24.1584 46.0282 29.2611 47.8905C26.912 50.0425 23.3893 50.4404 20.6165 48.8382C17.8436 47.236 16.4258 43.9827 17.1147 40.8707L17.1129 40.8725ZM25.1105 41.0487C23.0789 41.6142 20.9757 40.691 19.9695 38.9456C18.9632 37.2003 19.2161 34.9156 20.7211 33.4373C19.2161 31.9607 18.9632 29.6743 19.9695 27.929C20.9757 26.1837 23.0806 25.2604 25.1105 25.8259C25.6355 23.7821 27.4875 22.4207 29.5017 22.4207C31.516 22.4207 33.3663 23.7821 33.8929 25.8259C35.9246 25.2604 38.0278 26.1837 39.034 27.929C40.0403 29.6743 39.7874 31.959 38.2824 33.4373C39.7874 34.9139 40.0403 37.2003 39.034 38.9456C38.0278 40.691 35.9229 41.6142 33.8929 41.0487C33.368 43.0925 31.516 44.4539 29.5017 44.4539C27.4875 44.4539 25.6372 43.0925 25.1105 41.0487ZM29.7407 18.9841C32.0897 16.8321 35.6124 16.4342 38.3853 18.0364C41.1581 19.6386 42.5759 22.8919 41.8871 26.0039C37.7243 22.5132 35.2637 24.4261 34.1615 25.3581C34.4161 23.9374 34.8416 20.8481 29.7389 18.9859L29.7407 18.9841ZM34.1632 41.52C35.2654 42.4503 37.7261 44.3649 41.8888 40.8742C42.5759 43.9862 41.1599 47.2395 38.387 48.8417C35.6142 50.4439 32.0915 50.046 29.7424 47.894C34.8434 46.0317 34.4196 42.9424 34.165 41.5217L34.1632 41.52ZM29.5017 6.02144C34.4946 6.02144 38.9416 9.33061 40.3908 14.0902C33.6662 12.8388 30.44 15.3852 29.5017 18.5024C28.5635 15.3852 25.3355 12.837 18.6109 14.0884C20.0619 9.32886 24.5089 6.01969 29.5 6.01969L29.5017 6.02144ZM7.31031 33.1999C3.91664 29.5626 3.27662 24.0543 5.77392 19.7276C8.26947 15.4009 13.3565 13.2 18.2011 14.324C13.7559 19.5269 14.347 23.5971 16.5758 25.969C13.4088 25.2237 9.59137 26.7457 7.31206 33.2017L7.31031 33.1999ZM7.31031 33.6729C9.58962 40.1272 13.4071 41.6491 16.574 40.9039C14.3453 43.2758 13.7541 47.3459 18.1994 52.5488C13.3548 53.6728 8.26947 51.4719 5.77217 47.1452C3.27662 42.8185 3.9149 37.3102 7.30857 33.6729H7.31031ZM29.4983 60.8549C24.5054 60.8549 20.0584 57.5475 18.6092 52.7862C25.3338 54.0376 28.56 51.4894 29.5 48.3722C30.4382 51.4894 33.6645 54.0376 40.3891 52.7862C38.9381 57.5457 34.4911 60.8549 29.5 60.8549H29.4983ZM53.2243 47.1452C50.7288 51.4719 45.6418 53.6728 40.7971 52.5488C45.2424 47.3459 44.6512 43.2758 42.4225 40.9039C45.5894 41.6491 49.4069 40.1272 51.6862 33.6729C55.0799 37.3102 55.7199 42.8185 53.2226 47.1452H53.2243ZM33.8895 35.9733V30.8996L29.4983 28.3618L25.1071 30.8996V35.9733L29.4983 38.511L33.8895 35.9733Z" fill="currentColor"></path>
              </svg>
            </a>

            {/* Social Media Icons */}
            <div className="flex w-full items-center justify-end gap-3 md:w-auto">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  rel="noopener noreferrer" 
                  target="_blank" 
                  aria-label={social.label}
                  className="flex items-center justify-center focus:text-green-500 text-gray-400 transition-colors hover:text-green-500 h-6 w-6"
                  href={social.href}
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
