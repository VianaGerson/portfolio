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
            work="Projeto de Projeção de Fibra Óptica: desenvolvimento de sistema para
              planejamento de infraestrutura, permitindo adicionar equipamentos com
              Google Maps e calcular automaticamente os custos de projeto.
              Tecnologias: PHP (Laravel), React.js, APIs de geolocalização.
              Chatbot de Atendimento via WhatsApp: criação de solução para
              atendimento automatizado, integrando múltiplas tecnologias.
              Tecnologias: PHP (Laravel), Node.js, Go, React.js.
              Atuação em modelagem de dados, APIs e interfaces responsivas,
              garantindo eficiência e escalabilidade nas entregas."
          />

          <ExperienceItem
            company="Expertise - Inteligencia E Pesquisa De Mercado"
            companyLink="https://www.instagram.com/expertiseconsulting"
            time="dez 2020 - jul 2021"
            position="Desenvolvedor Full Stack"
            work="Atuação no desenvolvimento de sistema de controle e ordens de serviço
              (OS/OR).
              Inicialmente, responsável por integrações com Google Planilhas para
              extração de dados.
              Participação na migração para SaaS dedicado, substituindo planilhas por
              um software robusto.
              Desenvolvimento utilizando Python/Django e, posteriormente, PHP
              (Laravel) e Vue.js.
              Implementação de APIs, modelagem de dados (PostgreSQL) e suporte em
              testes e manutenção."
          />

          <ExperienceItem
            company="Rits - Assinaturas e Vendas Recorrentes"
            companyLink="https://ritspay.com"
            time="jul 2021 - atual"
            position="Desenvolvedor Full Stack"
            work="Desenvolvimento e manutenção de sistemas de assinaturas, com foco em
              integrações complexas:
              Gateways de pagamento: Vindi, Pagar Me, Iugu, Safe2Pay
              ERPs: Bling
              CRMs: Active Campaign
              E-commerces: Shopify, VTEX, Nuvemshop, Tray, Braavo,
              Magazord
              Logística: Intelipost, Frenet, Melhor Envio, Mandaê​
              Atuação com infraestrutura AWS: Redis, SQS, Lambda, RDS, S3,
              ElastiCache, ECS.
              Criação e manutenção de APIs em PHP (Laravel).
              Criação e manutenção de front end utilizando ReactJs e Laravel Blade,
              com Javascript, css e JQuery.
              Participação em code reviews, definição de boas práticas (SOLID, Clean
              Code, MVC) e documentação técnica."
          />
        </ul>
      </div>
    </div>
  )
}
