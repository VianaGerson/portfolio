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
            text="Desenvolvedor Full Stack | Especialista em Backend"
            className="!text-left !text-6xl xl:text-5xl lg:!text-center lg:!text-6xl
            md:!text-5xl sm:!text-3xl"
          />
          <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
            Especialista na construção de APIs robustas e escaláveis, com foco
            em arquitetura de sistemas e otimização de bancos de dados para alta
            performance. No frontend, integro soluções de forma eficiente,
            garantindo uma experiência completa e fluida. Unindo Laravel, NestJS
            e AWS, entrego engenharia de software de alto nível para desafios
            complexos de negócio..
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
            <Link
              href="/projects"
              className="ml-8 text-lg font-medium capitalize underline underline-offset-2 md:text-base"
            >
              Projetos
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
