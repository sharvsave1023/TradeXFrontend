'use client'

import { SideNav } from "@/components/side-nav"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <SideNav />

      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="p-12 pr-24 sm:pr-12">
          <h1 className="text-2xl font-extralight tracking-tight text-white">
            Trade<span className="text-green-400">X</span>
          </h1>
        </div>

        <div className="px-4 pb-4 md:px-12 md:pb-12">
          <div className="mx-4 md:mx-0 md:ml-[120px] w-[calc(100%-32px)] md:w-[calc(100%-120px)] rounded-3xl bg-black/20 backdrop-blur-sm p-12">
            <h2 className="text-4xl font-extralight text-white mb-12">About TradeX</h2>
            
            <div className="text-white/80 font-extralight space-y-6">
              <p className="text-2xl">
              Our model forecasts future returns by looking at the historical performance of each of the 11 GICS sectors. Using this data, and taking into account how much risk you are willing to undertake, we deliver numerous combinations for a handcrafted, diversified portfolio.
              </p>

              <h3 className="text-3xl text-white mt-16 mb-10 text-center">Our Team</h3>
              
              <div className="flex justify-center items-center gap-6">
                <div className="p-6 text-center">
                  <h4 className="text-2xl text-green-400">Sharv</h4>
                  <p className="text-white/60 text-lg">Role / Stuff we did</p>
                </div>
                <div className="w-px h-24 bg-white/10"></div>
                <div className="p-6 text-center">
                  <h4 className="text-2xl text-green-400">Varun</h4>
                  <p className="text-white/60 text-lg">Role / Stuff we did</p>
                </div>
                <div className="w-px h-24 bg-white/10"></div>
                <div className="p-6 text-center">
                  <h4 className="text-2xl text-green-400">Bakry</h4>
                  <p className="text-white/60 text-lg">Role / Stuff we did</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}