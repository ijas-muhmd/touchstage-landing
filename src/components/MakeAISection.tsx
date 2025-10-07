'use client';

import { useState } from 'react';

export default function MakeAISection() {
  const [activeTab, setActiveTab] = useState('ground');

  const tabs = [
    {
      id: 'ground',
      title: 'Ground your AI agent',
      description: 'Imbue your agent with your company\'s identity, policies, processes, and knowledge – ensuring your agent represents the best of your business.',
      content: (
        <div className="relative aspect-square w-full animate-fade-in rounded-3xl bg-gray-300">
          <div className="relative h-full w-full cursor-pointer overflow-hidden rounded-3xl">
            <div className="relative h-full w-full">
              {/* Agent OS Visualization */}
              <div className="h-full w-full flex items-center justify-center p-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
                  {/* WestWalk Bags Card (Background) */}
                  <div className="absolute top-4 left-4 bg-gray-100 rounded-xl p-4 w-32 opacity-60">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-600">W</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">WestWalk Bags</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Agent OS Card (Main) */}
                  <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center gap-2 mb-4">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-500">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <span className="font-semibold text-gray-800">Agent OS</span>
                    </div>
                    
                    <div className="space-y-3">
                      {/* Knowledge */}
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-600">
                            <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-700">Knowledge</span>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                      
                      {/* Integration */}
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-600">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-700">Integration</span>
                        </div>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
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
                    className="group/control pointer-events-auto z-10 items-center justify-center rounded-full p-1 md:bottom-4 md:left-4 flex transition-opacity opacity-100 focus-visible:opacity-100 hover:opacity-100 h-10 w-10 bg-white text-gray-600 hover:bg-gray-50 hover:text-green-500 disabled:bg-gray-400/6 disabled:text-gray-400" 
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
      id: 'solve',
      title: 'Solve problems the right way',
      description: 'Set goals to guide your agent to the right solutions, and set guardrails to ensure they stay on-point and aligned with your policies.',
      content: (
        <div className="relative aspect-square w-full rounded-3xl bg-gray-300">
          <div className="h-full w-full flex items-center justify-center p-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Problem Solving</p>
                <p className="text-sm text-gray-500">Customizable skills and workflows</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'action',
      title: 'Take action on your systems',
      description: 'Conversational AI isn\'t just about answering questions. With Sierra, your AI agent can take action, whether updating a case in CRM or managing a delivery in an order management system.',
      content: (
        <div className="relative aspect-square w-full rounded-3xl bg-gray-300">
          <div className="h-full w-full flex items-center justify-center p-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">System Actions</p>
                <p className="text-sm text-gray-500">CRM, Shopify, Salesforce integration</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="relative bg-gray-200 py-12 md:py-16 xl:py-18" style={{zIndex: 1}}>
      <div style={{opacity: 1, transform: 'none'}}>
        <div className="mx-auto w-full max-w-[1160px] px-4 md:px-6">
          <div className="grid grid-cols-12 gap-2 md:gap-4 pb-8 md:pb-14">
            <h2 className="col-span-12 font-headline-l text-black xl:col-span-8 xl:row-start-1">
              Make AI your own
            </h2>
            <div className="col-span-12 row-start-2 xl:col-span-8">
              <p className="font-body-s whitespace-pre-wrap text-gray-400 md:max-w-xl">
                Sierra's platform enables your company to build an AI agent that is personalized to your business and customers.
              </p>
            </div>
            <div className="col-span-12 row-start-3 flex min-w-[170px] pt-2 xl:col-span-3 xl:col-start-10 xl:row-start-1 xl:items-end xl:justify-end xl:place-self-end">
              <a 
                className="inline-flex cursor-pointer items-center justify-between rounded-full outline-hidden disabled:cursor-not-allowed transition-all duration-150 focus:bg-green-400 hover:bg-green-400 focus-visible:bg-green-400 active:bg-green-600 disabled:bg-gray-400 gap-1 px-4 py-3 font-label-m place-self-start bg-green-500 text-white"
                href="/product/develop-your-agent"
              >
                Our platform
              </a>
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
                        ? 'bg-white shadow-sm' 
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <h3 className="font-body-l text-black">
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
                        <p className="px-4 font-body-s md:p-4 md:pt-2 xl:px-6 xl:py-4 text-gray-600">
                          {tab.description}
                        </p>
                        {/* Mobile-only content */}
                        <div className="p-4 md:hidden">
                          <figure className="relative aspect-square w-full overflow-hidden rounded-xl">
                            <div className="relative h-full w-full cursor-pointer">
                              <div className="h-full w-full bg-gray-100 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500">
                                      <path d="M21 12L6 3V21L21 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"></path>
                                    </svg>
                                  </div>
                                  <p className="text-sm text-gray-600">Video Content</p>
                                </div>
                              </div>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                    {activeTab === tab.id && (
                      <div className="absolute top-0 right-0 -z-10 w-full !scale-100 rounded-2xl bg-gray-100" style={{height: '164px', transform: 'none', transformOrigin: '50% 50% 0px', opacity: 1}}></div>
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
          
          {/* Mobile CTA */}
          <div className="grid-cols-12 gap-2 mt-4 block md:hidden md:gap-6">
            <div className="relative col-span-12 md:col-span-6 md:col-start-1 md:row-start-2">
              <a 
                className="inline-flex cursor-pointer items-center justify-between rounded-full outline-hidden disabled:cursor-not-allowed transition-all duration-150 focus:bg-gray-100 hover:bg-gray-100 hover:text-green-500 disabled:bg-gray-400/6 disabled:text-gray-400 gap-1 px-4 py-3 font-label-m mt-4 xl:mt-6 bg-gray-50 text-gray-700"
                href="/product/develop-your-agent"
              >
                Our platform
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90 h-[1em] w-[1em]">
                  <path d="M6 10L12 4L18 10M12 5V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
