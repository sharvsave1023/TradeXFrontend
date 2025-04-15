'use client'

import { SideNav } from "@/components/side-nav"
import { PreferencesSection } from "@/components/platform/preferences-section"

export default function PlatformPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/31251-385265625_small-I8P33QBfpLSdc5y3dAnk9RWCw5GEyQ.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <SideNav />

      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="p-12 pr-24 sm:pr-12">
          <h1 className="text-2xl font-extralight tracking-tight text-white">
            Trade<span className="text-green-400">X</span>
          </h1>
        </div>

        <div className="flex-1 flex px-4 pb-4 md:px-12 md:pb-12">
          {/* Main content area with margin for sidebar */}
          <div className="flex-1 flex ml-[120px]">
            {/* Preferences Section */}
            <div className="w-80 mr-6">
              <div className="rounded-3xl bg-black/20 backdrop-blur-sm border border-white/10">
                <h2 className="text-xl font-light text-white p-6 border-b border-white/10">
                  Investment Preferences
                </h2>
                <PreferencesSection />
              </div>
            </div>

            {/* Statistics Section */}
            <div className="flex-1">
              <div className="rounded-3xl bg-black/20 backdrop-blur-sm border border-white/10 h-[calc(100vh-180px)]">
                <h2 className="text-xl font-light text-white p-6 border-b border-white/10">
                  Portfolio Statistics
                </h2>
                <div className="p-6">
                  {/* Statistics content will go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

