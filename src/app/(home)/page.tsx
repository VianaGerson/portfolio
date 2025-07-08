import Image from 'next/image'
import Link from 'next/link'

import { ArrowDownRightSquare } from 'lucide-react'

import { AnimatedText } from '@/components/animated-text'

import { Container } from '@/components/container'

import { HeroImage } from './_components/hero-image'

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center sm:items-start">
      <Container className="flex items-start justify-between md:flex-col">
        <div className="w-1/2 lg:hidden md:inline-block md:w-full sm:mb-4">
          <HeroImage />
        </div>

        <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
          <AnimatedText
            text="Desenvolvedor Fullstack | Especialista em Backend"
            className="!text-left !text-6xl xl:text-5xl lg:!text-center lg:!text-6xl
            md:!text-5xl sm:!text-3xl"
          />
          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            Sou um desenvolvedor fullstack com forte foco em backend,
            especializado na construção de APIs robustas e escaláveis. Minha
            experiência abrange desde a arquitetura de sistemas até a otimização
            de bancos de dados,sempre visando alta performance e segurança. No
            frontend, tenho proficiência para integrar e manter soluções de
            forma eficiente, garantindo uma experiência completa e fluida.
          </p>

          <div className="mt-2 flex items-center self-start lg:self-center">
            <Link
              href="/about"
              className="flex items-center gap-2 rounded-lg border-2 border-solid
              bg-foreground p-2.5 px-6 text-lg font-semibold capitalize text-background
              hover:bg-transparent hover:text-foreground md:p-2 md:px-4 md:text-base"
            >
              Sobre <ArrowDownRightSquare className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-36 right-8 inline-block w-24 md:hidden">
        <Image
          src="/images/api-interface.svg"
          alt="Api"
          width={38}
          height={65}
          className="relative h-auto w-full"
        />
      </div>
    </main>
  )
}
