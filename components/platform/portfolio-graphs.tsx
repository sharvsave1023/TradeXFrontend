'use client'

import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

interface PortfolioGraphsProps {
  riskTolerance: string
  investmentHorizon: string
  sectorFocus: string
  rebalancingFrequency: string
}

const generateRandomPerformanceData = (baseValue: number, volatility: number) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let currentValue = baseValue
  return months.map(() => {
    // Generate a random change between -volatility and +volatility
    const change = (Math.random() * 2 - 1) * volatility
    currentValue = currentValue * (1 + change)
    return Math.round(currentValue * 100) / 100
  })
}

const generateRandomAllocation = (riskTolerance: string) => {
  const allocations = {
    Conservative: {
      stocks: 40,
      bonds: 45,
      cash: 10,
      alternative: 5
    },
    Moderate: {
      stocks: 60,
      bonds: 30,
      cash: 5,
      alternative: 5
    },
    Aggressive: {
      stocks: 80,
      bonds: 15,
      cash: 0,
      alternative: 5
    }
  }

  // Add some randomness to the base allocation
  const baseAllocation = allocations[riskTolerance as keyof typeof allocations]
  const randomize = (value: number) => {
    const variation = Math.random() * 10 - 5 // Random number between -5 and 5
    return Math.max(0, Math.min(100, value + variation))
  }

  const stocks = randomize(baseAllocation.stocks)
  const bonds = randomize(baseAllocation.bonds)
  const cash = randomize(baseAllocation.cash)
  const alternative = randomize(baseAllocation.alternative)

  // Normalize to ensure they sum to 100
  const total = stocks + bonds + cash + alternative
  return {
    stocks: Math.round((stocks / total) * 100),
    bonds: Math.round((bonds / total) * 100),
    cash: Math.round((cash / total) * 100),
    alternative: Math.round((alternative / total) * 100)
  }
}

export function PortfolioGraphs({
  riskTolerance,
  investmentHorizon,
  sectorFocus,
  rebalancingFrequency,
}: PortfolioGraphsProps) {
  const [portfolioData, setPortfolioData] = useState<any>(null)

  useEffect(() => {
    const generatePortfolioData = () => {
      // Generate random allocation based on risk tolerance
      const allocation = generateRandomAllocation(riskTolerance)
      
      const assetAllocation = {
        labels: ['Stocks', 'Bonds', 'Cash', 'Alternative'],
        datasets: [
          {
            data: [allocation.stocks, allocation.bonds, allocation.cash, allocation.alternative],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(153, 102, 255, 0.6)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }

      // Generate random performance data with different volatility based on risk tolerance
      const volatility = riskTolerance === 'Conservative' ? 0.02 : 
                        riskTolerance === 'Moderate' ? 0.04 : 0.06
      const performanceData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Portfolio Performance',
            data: generateRandomPerformanceData(100, volatility),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      }

      setPortfolioData({
        allocation: assetAllocation,
        performance: performanceData,
      })
    }

    generatePortfolioData()
  }, [riskTolerance, investmentHorizon, sectorFocus, rebalancingFrequency])

  if (!portfolioData) return null

  return (
    <div className="mt-6 space-y-6">
      <div className="rounded-lg bg-gray-800/40 p-4">
        <h3 className="text-lg font-light text-white mb-4">Asset Allocation</h3>
        <div className="h-64">
          <Doughnut
            data={portfolioData.allocation}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'right',
                  labels: {
                    color: 'white',
                  },
                },
                tooltip: {
                  callbacks: {
                    label: (context) => {
                      return `${context.label}: ${context.raw}%`
                    }
                  }
                }
              },
            }}
          />
        </div>
      </div>

      <div className="rounded-lg bg-gray-800/40 p-4">
        <h3 className="text-lg font-light text-white mb-4">Portfolio Performance</h3>
        <div className="h-64">
          <Line
            data={portfolioData.performance}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  labels: {
                    color: 'white',
                  },
                },
                tooltip: {
                  callbacks: {
                    label: (context) => {
                      return `Value: $${context.raw}`
                    }
                  }
                }
              },
              scales: {
                y: {
                  ticks: {
                    color: 'white',
                    callback: (value) => `$${value}`
                  },
                  grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                  },
                },
                x: {
                  ticks: {
                    color: 'white',
                  },
                  grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  )
} 