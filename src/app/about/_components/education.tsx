'use client'

import React from 'react'

import { motion, useScroll } from 'framer-motion'

import { EducationItem } from './education-item'

export function Education() {
  const ref = React.useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  })

  return (
    <div className="my-64">
      <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">
        Educação
      </h2>

      <div ref={ref} className="relative mx-auto w-3/4 lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="dark:shadow-3xl dark:bg-primary-dark absolute left-9 top-0.5
          h-full w-1 origin-top rounded-full bg-foreground md:left-[30px]
          md:w-[2px] xs:left-5"
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <EducationItem
            time="2015-2019"
            place="IFRN - Instituto Federal do Rio Grande do Norte"
            type="Graduado em Análise e Desenvolvimento de Sistemas"
            details="Cursos relevantes incluíram Estruturas e Algoritmos de Dados,
            Engenharia de Sistemas de Computação, Web Design, entre outros."
          />

          <EducationItem
            time="2021"
            place="Udemy"
            type="Certificação AWS Desenvolvedor - Associate - 2021"
            details="A Udemy é uma plataforma de educação à distância (EAD) que oferece mais de 100 mil
            cursos on-line gratuitos e pagos com certificação."
          />

          <EducationItem
            time="2021"
            place="Udemy"
            type="Python 3 na Web com Django (Básico e Intermediário)"
            details="A Udemy é uma plataforma de educação à distância (EAD) que oferece mais de 100 mil
            cursos on-line gratuitos e pagos com certificação."
          />

          <EducationItem
            time="2021"
            place="Udemy"
            type="Curso Vue JS 2 - O Guia Completo (incl. Vue Router & Vuex)"
            details="A Udemy é uma plataforma de educação à distância (EAD) que oferece mais de 100 mil
            cursos on-line gratuitos e pagos com certificação."
          />

          <EducationItem
            time="2025"
            place="Full Cycle"
            type="FC Tech Week IA for Devs - 2025"
            details="A Full Cycle é uma plataforma de educação à distância (EAD) que oferece cursos on-line gratuitos e pagos com certificação."
          />
        </ul>
      </div>
    </div>
  )
}
