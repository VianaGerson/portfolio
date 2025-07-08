export function Bio() {
  return (
    <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
      <h2 className="mb-4 text-lg font-bold uppercase text-foreground/75">
        Biografia
      </h2>

      <p className="font-medium">
        Olá, sou Gerson Viana, um desenvolvedor fullstack com forte foco em
        backend, especializado na construção de APIs robustas e escaláveis e
        manutenção de sistems frontend.
      </p>

      <p className="mt-4 font-medium">
        Com mais de 5 anos de experiência na área, estou sempre buscando evoluir
        meus conhecimentos como desenvolvedor. Trabalho diariamente com PHP,
        React e frameworks como Next.js e Laravel, mas também tenho conhecimento
        em NodeJs e Python. Também possuo habilidades em administração e gestão
        de projetos, funções administrativas (Liderança, Direção, Planejamento e
        Controle) e Gestão de TI.
      </p>

      <div className="mt-5 flex flex-col">
        <strong>DevOps:</strong>
        <p className="mt-4 font-medium">
          - Experiência com ferramentas de versionamento de projetos (
          <strong>Git</strong>, <strong>GitHub</strong>,{' '}
          <strong>Gitflow</strong>)
        </p>
        <p className="mt-4 font-medium">
          - Vivência com serviços AWS (<strong>Lambda</strong>,{' '}
          <strong>EC2</strong>, <strong>RDS</strong>, <strong>ECS</strong>,{' '}
          <strong>SQS</strong>).
        </p>

        <p className="mt-4 font-medium">
          - Experiência com metodologias de desenvolvimento (
          <strong>Scrum</strong>, <strong>Kanban</strong>, etc.)
        </p>
      </div>

      <p className="mt-4 font-medium">
        &ldquo;O fullstack é o arquiteto completo do mundo digital. Ele não se
        limita a uma única área, mas sim domina tanto a criação das interfaces
        que os usuários veem e interagem (o frontend), quanto a construção das
        robustas estruturas, lógicas e bancos de dados que fazem tudo funcionar
        por trás dos pano.&rdquo;
      </p>
    </div>
  )
}
