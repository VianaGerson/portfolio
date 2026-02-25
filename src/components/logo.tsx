'use client'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="mt-2 h-auto object-contain"
        src="/images/logo.svg"
        alt="Logo"
        width={74}
        height={74}
      />
    </div>
  )
}
