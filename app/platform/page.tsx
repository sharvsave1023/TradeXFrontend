'use client'

import { useState } from 'react'
import { SideNav } from "@/components/side-nav"
import { PreferencesSection } from "@/components/platform/preferences-section"
import { PortfolioGraphs } from "@/components/platform/portfolio-graphs"
import { Button } from "@/components/ui/button"

export default function PlatformPage() {
  const [portfolioData, setPortfolioData] = useState<{
    riskTolerance: string
    investmentHorizon: string
    investmentAmount: string
    sectorFocus: string
    rebalancingFrequency: string
  } | null>(null)

  const handleRegenerate = () => {
    setPortfolioData(null)
  }

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
              <div className="rounded-3xl bg-gray-800/40 backdrop-blur-md border border-white/20 shadow-lg shadow-black/30">
                <h2 className="text-xl font-light text-white p-6 border-b border-white/20">
                  Investment Preferences
                </h2>
                <PreferencesSection 
                  onPortfolioGenerated={setPortfolioData} 
                  isPortfolioGenerated={!!portfolioData}
                />
              </div>
            </div>

            {/* Statistics Section */}
            <div className="flex-1">
              <div className="rounded-3xl bg-gray-800/40 backdrop-blur-md border border-white/20 shadow-lg shadow-black/30 h-[calc(100vh-180px)]">
                <div className="flex items-center justify-between p-6 border-b border-white/20">
                  <h2 className="text-xl font-light text-white">
                    Portfolio Statistics
                  </h2>
                  {portfolioData && (
                    <Button
                      onClick={handleRegenerate}
                      className="bg-green-500 hover:bg-green-600 text-white"
                    >
                      Regenerate Portfolio
                    </Button>
                  )}
                </div>
                <div className="p-6 overflow-y-auto h-[calc(100%-80px)]">
                  {portfolioData ? (
                    <PortfolioGraphs {...portfolioData} />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-white/60 text-lg font-light">
                        Select your investment preferences to generate portfolio statistics
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

