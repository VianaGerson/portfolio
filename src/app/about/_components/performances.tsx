'use client'

import dataPerformances from '@/data/performances.json'

import { Performance } from './performance'

export function Performances() {
  return (
    <>
      <h2 className="mt-12 w-full text-center text-5xl font-bold md:mt-16 md:text-3xl">
        Atuações em marcas
      </h2>

      <div className="mb-54 relative mt-24 flex w-full items-center justify-center md:mb-32">
        <div className="grid grid-cols-5 gap-12 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1">
          {dataPerformances.map((performance) => (
            <Performance
              key={performance.name}
              name={performance.name}
              imageUrl={performance.imageUrl}
            />
          ))}
        </div>
      </div>
    </>
  )
}
