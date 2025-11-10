'use client'

import { Button } from "@/components/ui/button"
import { pricingFeatures, pricingPlans } from "./pricing-data"
import { useState } from "react"

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const categories = Array.from(new Set(pricingFeatures.map(f => f.category)))

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the perfect plan for your needs
        </p>
      </div>

      {/* Feature Category Filter */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors
            ${!selectedCategory 
              ? 'bg-primary text-white' 
              : 'bg-primary/10 text-primary hover:bg-primary/20'
            }`}
        >
          All Features
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Pricing Table */}
      <div className="mt-12 grid gap-8 lg:grid-cols-4">
        {pricingPlans.map((plan, planIdx) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border bg-background p-8 shadow-sm transition-shadow hover:shadow-md
              ${plan.isPopular ? 'border-primary ring-1 ring-primary' : 'border-border'}
            `}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="inline-block rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </div>
              </div>
            )}

            <div className="text-center">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-muted-foreground">{plan.description}</p>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">{plan.tagline}</span>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {pricingFeatures
                .filter(feature => 
                  (!selectedCategory || feature.category === selectedCategory) &&
                  plan.features.includes(feature.name)
                )
                .map((feature) => (
                  <li key={feature.name} className="flex items-center text-sm">
                    <svg
                      className="h-5 w-5 text-primary shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3">{feature.name}</span>
                  </li>
                ))}
            </ul>

            <div className="mt-8">
              <Button
                variant={plan.isPopular ? "default" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section Placeholder */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Have questions? We're here to help.
        </p>
      </div>
    </div>
  )
}
