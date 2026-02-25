import { Container } from '@/components/container'
import { TransitionEffect } from '@/components/transition-effect'

import { Projects } from './_components/projects'

export default function ProjectsPage() {
  return (
    <>
      <TransitionEffect />

      <main className="mb-16 flex flex-col items-center justify-center">
        <Container className="!pt-16">
          <Projects />
        </Container>
      </main>
    </>
  )
}
