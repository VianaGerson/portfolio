export function Bio() {
  return (
    <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
      <h2 className="mb-4 text-lg font-bold uppercase text-foreground/75">
        Biografia
      </h2>

      <p className="font-medium">
        Olá, sou Gerson Viana, um desenvolvedor Full Stack com forte foco em
        Backend, especializado na construção de APIs robustas e manutenção de
        sistemas Frontend modernos.
      </p>

      <p className="mt-4 font-medium">
        Com {new Date().getFullYear() - 2019} anos de experiência,, transformo
        regras de negócio complexas em soluções escaláveis. Sou especialista em
        sistemas de recorrência e ecossistemas de e-commerce, unindo a robustez
        do Laravel/NestJS à agilidade da infraestrutura AWS para sustentar
        plataformas de grandes marcas como Exame e Integralmedica.
      </p>

      <p className="mt-4 font-medium">
        &ldquo;O Full Stack é o arquiteto completo do mundo digital. Ele não se
        limita a uma única área: domina desde a criação de interfaces intuitivas
        até a construção das robustas estruturas de lógica e dados que garantem
        a performance por trás dos panos.&rdquo;
      </p>
    </div>
  )
}
