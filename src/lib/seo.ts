export const SEOConfig = {
  name: 'Gerson | Desenvolvedor Fullstack',
  description: `Sou um desenvolvedor Fullstack apaixonado pelo processo da criação ao lançamento.`,
  url: 'http://localhost:3000',
  ogImage: '',
  links: {
    whatsApp: 'https://wa.me/+5584996196819',
    curriculum: `https://www.linkedin.com/in/gerson-viana-2bb321124`,
  },
} as const

export type SEOConfig = typeof SEOConfig
