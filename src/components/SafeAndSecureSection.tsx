'use client';

import { useState } from 'react';

export default function SafeAndSecureSection() {
  const [activeTab, setActiveTab] = useState('supervision');

  const tabs = [
    {
      id: 'supervision',
      title: 'Supervision',
      description: 'Guardrails ensure your agent stays on-topic, and real-time monitoring tracks live interactions.',
      content: (
        <div className="relative aspect-square w-full animate-fade-in rounded-3xl bg-gray-700">
          <div className="relative h-full w-full cursor-pointer overflow-hidden rounded-3xl">
            <div className="relative h-full w-full">
              {/* Chat Interface Mockup */}
              <div className="h-full w-full flex items-center justify-center p-8">
                <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md">
                  {/* Chat Messages */}
                  <div className="space-y-4">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-gray-600 rounded-lg p-3 max-w-xs">
                        <p className="text-white text-sm">cake recipe?</p>
                      </div>
                    </div>
                    
                    {/* AI Response */}
                    <div className="flex justify-start">
                      <div className="bg-orange-500 rounded-full px-4 py-2 flex items-center gap-2">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
                          <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                        <span className="text-white text-sm font-medium">Off topic</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Controls */}
            <div className="group/controls absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col gap-2 px-2 pb-2 md:px-4 md:pb-4 justify-end" style={{pointerEvents: 'auto', opacity: 1}}>
              <div className="pointer-events-none z-10 flex w-full items-center justify-start gap-2">
                <div className="flex items-center gap-2">
                  <button 
                    className="group/control pointer-events-auto z-10 items-center justify-center rounded-full p-1 md:bottom-4 md:left-4 flex transition-opacity opacity-100 focus-visible:opacity-100 hover:opacity-100 h-10 w-10 bg-gray-600 text-white hover:bg-gray-500 disabled:bg-gray-400/6 disabled:text-gray-400" 
                    type="button" 
                    aria-label="Pause video"
                  >
                    <span className="rounded-full p-2 transition">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-current h-4 w-4">
                        <path d="M4.75 3.75H9.25V20.25H4.75V3.75Z" stroke="currentColor" strokeWidth="2"></path>
                        <path d="M14.75 3.75H19.25V20.25H14.75V3.75Z" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'secure-integration',
      title: 'Secure integration',
      description: 'AI may be flexible, but security standards should not be. When AI accesses your systems of record, those interactions are deterministic and controlled to ensure your AI always follows your policies and security procedures.',
      content: (
        <div className="relative aspect-square w-full rounded-3xl bg-gray-700">
          <div className="h-full w-full flex items-center justify-center p-8">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-500">
                    <path d="M12 22S2 16 2 10V6L12 2L22 6V10C22 16 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-white font-medium">Security Protection</p>
                <p className="text-sm text-gray-300">Hacker prevention</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'auditing',
      title: 'Auditing',
      description: 'Built-in quality assurance workflows ensure your customer experience team can understand the reasoning behind every AI interaction.',
      content: (
        <div className="relative aspect-square w-full rounded-3xl bg-gray-700">
          <div className="h-full w-full flex items-center justify-center p-8">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-white font-medium">Quality Assurance</p>
                <p className="text-sm text-gray-300">Knowledge sources tracking</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'data-governance',
      title: 'Data governance',
      description: 'Your data is only used for your company\'s agent. We don\'t use your data to train models, and we use industry standard best practices to ensure your data is secure.',
      content: (
        <div className="relative aspect-square w-full rounded-3xl bg-gray-700">
          <div className="h-full w-full flex items-center justify-center p-8">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500">
                    <path d="M12 22S2 16 2 10V6L12 2L22 6V10C22 16 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-white font-medium">Secure Storage</p>
                <p className="text-sm text-gray-300">Multiple chats protected</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy',
      description: 'Personally identifiable information is automatically encrypted and masked.',
      content: (
        <div className="relative aspect-square w-full rounded-3xl bg-gray-700">
          <div className="h-full w-full flex items-center justify-center p-8">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-500">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-white font-medium">Data Encryption</p>
                <p className="text-sm text-gray-300">Address masking</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative bg-black py-12 md:py-16 xl:py-18" style={{zIndex: 0}}>
      <div style={{opacity: 1, transform: 'none'}}>
        <div className="mx-auto w-full max-w-[1160px] px-4 md:px-6">
          <div className="grid grid-cols-12 gap-2 md:gap-4 pb-8 md:pb-14">
            <h2 className="col-span-12 font-headline-l text-white xl:col-span-8 xl:row-start-1">
              Safe and secure
            </h2>
            <div className="col-span-12 row-start-2 xl:col-span-8">
              <p className="font-body-s whitespace-pre-wrap text-gray-100 md:max-w-xl">
                Sierra is designed with the highest commitment to trust, security, and compliance. Your AI agent won&apos;t pretend to be something it&apos;s not, and it will be honest about its limitations.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-12 gap-2 md:gap-4 gap-y-8">
            {/* Tabbed Interface */}
            <div className="relative col-span-12 md:col-span-5 md:row-start-1 md:col-start-8 xl:col-start-8">
              <div className="relative flex flex-col gap-0.5">
                {tabs.map((tab) => (
                  <div 
                    key={tab.id}
                    className={`group relative cursor-pointer rounded-2xl transition-all duration-200 ${
                      activeTab === tab.id 
                        ? 'bg-gray-700 shadow-sm' 
                        : 'hover:bg-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <h3 className="font-body-l text-white">
                      <span className="flex gap-2 p-4 xl:px-6">
                        {tab.title}
                      </span>
                    </h3>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        activeTab === tab.id 
                          ? 'h-auto opacity-100' 
                          : 'h-0 opacity-0'
                      }`}
                    >
                      <div>
                        <p className="px-4 font-body-s md:p-4 md:pt-2 xl:px-6 xl:py-4 text-gray-100">
                          {tab.description}
                        </p>
                        {/* Mobile-only content */}
                        <div className="p-4 md:hidden">
                          <figure className="relative aspect-square w-full overflow-hidden rounded-xl">
                            <div className="relative h-full w-full cursor-pointer">
                              <div className="h-full w-full bg-gray-700 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mb-2 mx-auto">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
                                      <path d="M21 12L6 3V21L21 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                                    </svg>
                                  </div>
                                  <p className="text-sm text-gray-300">Video Content</p>
                                </div>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                    {activeTab === tab.id && (
                      <div className="absolute top-0 right-0 -z-10 w-full !scale-100 rounded-2xl bg-gray-700" style={{height: '140px', transform: 'none', transformOrigin: '50% 50% 0px'}}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual Content */}
            <div className="relative col-span-12 hidden md:col-span-6 md:row-start-1 md:block md:col-start-1">
              <div className="relative aspect-square w-full">
                {tabs.find(tab => tab.id === activeTab)?.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
