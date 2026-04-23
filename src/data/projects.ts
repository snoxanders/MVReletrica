export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Remodelação Completa de Cozinha",
    category: "Cozinhas",
    description: "Transformação total com novos armários, bancada e iluminação LED.",
    image: "/images/projects/cozinha-01.jpg",
  },
  {
    id: 2,
    title: "Sala com Iluminação de Autor",
    category: "Apartamentos",
    description: "Sala de jantar com candeeiros dourados e iluminação LED integrada.",
    image: "/images/projects/sala-01.jpg",
  },
  {
    id: 3,
    title: "Quadro Elétrico Profissional",
    category: "Eletricidade",
    description: "Instalação de quadro Hager — capacidade e organização para uso residencial e comercial.",
    image: "/images/projects/quadro-01.jpg",
  },
  {
    id: 4,
    title: "Casa de Banho Contemporânea",
    category: "Casas de Banho",
    description: "Acabamentos elegantes com iluminação embutida e loiças sanitárias modernas.",
    image: "/images/projects/casa-banho-01.jpg",
  },
  {
    id: 5,
    title: "Sistema Fotovoltaico",
    category: "Eletricidade",
    description: "Painéis solares em cobertura — eficiência energética e redução de custos.",
    image: "/images/projects/fotovoltaico-01.jpg",
  },
  {
    id: 6,
    title: "Remodelação de Espaço Comercial",
    category: "Apartamentos",
    description: "Salão profissional renovado — elétrica, iluminação e acabamentos de raiz.",
    image: "/images/projects/salao-01.jpg",
  },
];

export const categories = ["Todos", "Cozinhas", "Apartamentos", "Eletricidade", "Casas de Banho"];
