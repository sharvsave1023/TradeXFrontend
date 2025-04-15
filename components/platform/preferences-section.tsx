'use client'

import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown"
import { Button } from "@/components/ui/button"

interface PreferencesSectionProps {
  onPortfolioGenerated: (data: {
    riskTolerance: string
    investmentHorizon: string
    investmentAmount: string
    sectorFocus: string
    rebalancingFrequency: string
  }) => void
  isPortfolioGenerated: boolean
}

export function PreferencesSection({ onPortfolioGenerated, isPortfolioGenerated }: PreferencesSectionProps) {
  const [riskTolerance, setRiskTolerance] = useState('Select Risk Level')
  const [investmentHorizon, setInvestmentHorizon] = useState('Select Time Frame')
  const [investmentAmount, setInvestmentAmount] = useState('Select Amount')
  const [sectorFocus, setSectorFocus] = useState('Select Sectors')
  const [rebalancingFrequency, setRebalancingFrequency] = useState('Select Frequency')

  const handleSubmit = () => {
    // Validate that all preferences are selected
    if (
      riskTolerance === 'Select Risk Level' ||
      investmentHorizon === 'Select Time Frame' ||
      investmentAmount === 'Select Amount' ||
      sectorFocus === 'Select Sectors' ||
      rebalancingFrequency === 'Select Frequency'
    ) {
      alert('Please select all preferences before submitting')
      return
    }

    onPortfolioGenerated({
      riskTolerance,
      investmentHorizon,
      investmentAmount,
      sectorFocus,
      rebalancingFrequency,
    })
  }

  return (
    <div className="space-y-4 p-6">
      <div className="space-y-2">
        <label className="text-white/60 text-sm font-light">Risk Tolerance</label>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">{riskTolerance}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setRiskTolerance('Conservative')}>Conservative</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setRiskTolerance('Moderate')}>Moderate</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setRiskTolerance('Aggressive')}>Aggressive</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-2">
        <label className="text-white/60 text-sm font-light">Investment Horizon</label>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">{investmentHorizon}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setInvestmentHorizon('Short-term (1-3 years)')}>Short-term (1-3 years)</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setInvestmentHorizon('Medium-term (3-5 years)')}>Medium-term (3-5 years)</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setInvestmentHorizon('Long-term (5+ years)')}>Long-term (5+ years)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-2">
        <label className="text-white/60 text-sm font-light">Investment Amount</label>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">{investmentAmount}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setInvestmentAmount('$1,000 - $5,000')}>$1,000 - $5,000</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setInvestmentAmount('$5,000 - $10,000')}>$5,000 - $10,000</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setInvestmentAmount('$10,000+')}>$10,000+</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-2">
        <label className="text-white/60 text-sm font-light">Sector Focus</label>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">{sectorFocus}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setSectorFocus('Technology')}>Technology</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSectorFocus('Healthcare')}>Healthcare</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSectorFocus('Finance')}>Finance</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSectorFocus('Energy')}>Energy</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setSectorFocus('Consumer')}>Consumer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="space-y-2">
        <label className="text-white/60 text-sm font-light">Rebalancing Frequency</label>
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">{rebalancingFrequency}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setRebalancingFrequency('Monthly')}>Monthly</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setRebalancingFrequency('Quarterly')}>Quarterly</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setRebalancingFrequency('Annually')}>Annually</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="pt-4">
        <Button 
          onClick={handleSubmit}
          className="w-full bg-green-500 hover:bg-green-600 text-white"
        >
          {isPortfolioGenerated ? 'Update Portfolio' : 'Generate Portfolio'}
        </Button>
      </div>
    </div>
  )
} 