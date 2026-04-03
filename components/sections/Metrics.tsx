'use client'

import AnimatedCounter from '@/components/shared/AnimatedCounter'
import { METRICS } from '@/lib/constants'

export default function Metrics() {
  return (
    <section className="w-full bg-[#0d1a26] border-t border-b border-[rgba(0,212,200,0.15)] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-2">
              <div className="text-4xl md:text-5xl font-bold text-[#00d4c8]">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <p className="text-[#94a3b8] text-sm md:text-base leading-relaxed">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
