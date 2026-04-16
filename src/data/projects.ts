export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Remodelação Completa de Cozinha",
    category: "Cozinhas",
    description: "Transformação total com novos armários, bancada e iluminação LED.",
  },
  {
    id: 2,
    title: "Apartamento T2 - Renovação Total",
    category: "Apartamentos",
    description: "Remodelação integral incluindo elétrica, pavimentos e pintura.",
  },
  {
    id: 3,
    title: "Instalação Elétrica Residencial",
    category: "Eletricidade",
    description: "Nova instalação elétrica completa com quadro e diferencial.",
  },
  {
    id: 4,
    title: "Casa de Banho Moderna",
    category: "Casas de Banho",
    description: "Renovação com azulejos contemporâneos e iluminação embutida.",
  },
  {
    id: 5,
    title: "Iluminação de Escritório",
    category: "Eletricidade",
    description: "Projeto de iluminação LED eficiente para espaço comercial.",
  },
  {
    id: 6,
    title: "Remodelação de Sala de Estar",
    category: "Apartamentos",
    description: "Renovação com piso flutuante, sancas de luz e pintura decorativa.",
  },
];

export const categories = ["Todos", "Cozinhas", "Apartamentos", "Eletricidade", "Casas de Banho"];
