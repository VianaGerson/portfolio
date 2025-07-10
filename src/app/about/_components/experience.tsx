'use client'

import { useRef } from 'react'

import { motion, useScroll } from 'framer-motion'

import { ExperienceItem } from './experience-item'

export function Experience() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-24">
      <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">
        Experiência
      </h2>

      <div ref={ref} className="relative mx-auto w-3/4 lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="dark:shadow-3xl absolute left-9 top-0.5 h-full w-[4px]
          origin-top bg-foreground dark:bg-primary md:left-[30px] md:w-[2px]
          xs:left-[20px]"
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          <ExperienceItem
            company="EVOCORP"
            companyLink="https://www.evocorp.com.br"
            time="jan 2019 - dez 2024"
            position="Desenvolvedor Backend"
            work="Atuei em uma equipe responsável pelo desenvolvimento de soluções
            tecnológicas para diversos setores do mercado. Incluindo soluções Chatbot,
            Aplicações Mobile, Websites e Sistemas Web."
          />

          <ExperienceItem
            company="Expertise - Inteligencia E Pesquisa De Mercado"
            companyLink="https://www.instagram.com/expertiseconsulting"
            time="dez 2020 - jul 2021"
            position="Desenvolvedor Full Stack"
            work="Atuei no desenvolvimento da plataforma de gestão de reclamações e orderm de serviços voltadas para operadoras de internet."
          />

          <ExperienceItem
            company="Rits - Assinaturas e Vendas Recorrentes"
            companyLink="https://ritspay.com"
            time="jul 2021 - atual"
            position="Desenvolvedor Full Stack"
            work="Atuei na parte de terceirização de TI e no desenvolvimento da plataforma de assinaturas.
            Tanto na plataforma Saas quanto na versão enterprise."
          />
        </ul>
      </div>
    </div>
  )
}
