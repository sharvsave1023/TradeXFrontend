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
  investmentAmount: string
  sectorFocus: string
  rebalancingFrequency: string
}

export function PortfolioGraphs({
  riskTolerance,
  investmentHorizon,
  investmentAmount,
  sectorFocus,
  rebalancingFrequency,
}: PortfolioGraphsProps) {
  const [portfolioData, setPortfolioData] = useState<any>(null)

  useEffect(() => {
    // Simulate portfolio data based on user preferences
    const generatePortfolioData = () => {
      // This is a simplified example - in a real app, you would make an API call
      // to get actual portfolio recommendations based on the preferences
      const assetAllocation = {
        labels: ['Stocks', 'Bonds', 'Cash', 'Alternative'],
        datasets: [
          {
            data: [60, 30, 5, 5],
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

      const performanceData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Portfolio Performance',
            data: [100, 105, 110, 108, 115, 120],
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
  }, [riskTolerance, investmentHorizon, investmentAmount, sectorFocus, rebalancingFrequency])

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
              },
              scales: {
                y: {
                  ticks: {
                    color: 'white',
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