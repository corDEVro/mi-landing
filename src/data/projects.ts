export interface Project {
	title: string;
	description: string;
	tech: string[];
	image?: string;
	alt?: string;
	url?: string;
}

export const projects: Project[] = [
	{
		title: 'Buscador Cromos',
		description:
			'App web familiar para llevar el álbum de cromos de la Liga Este 2026/27: cada usuario tiene su colección, marca lo pegado y lleva la lista de faltados al kiosco. Desplegada en producción de punta a punta.',
		tech: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'JWT'],
		image: '/buscador-cromos.png',
		alt: 'Lupa con un balón de fútbol: el buscador de cromos',
		url: 'https://buscador-cromos.netlify.app',
	},
	{
		title: 'ApplyFlow',
		description:
			'Ecosistema inteligente de gestión de candidaturas: centraliza ofertas de portales de empleo, adapta tu CV y carta de presentación con IA y envía tu candidatura por email con el CV en PDF.',
		tech: ['React', 'TypeScript', 'Spring Boot', 'Java', 'IA (OpenRouter)'],
		image: '/applyflow.png',
		alt: 'Logo de ApplyFlow',
		url: 'https://applyflow-cordevro.netlify.app',
	},
];
