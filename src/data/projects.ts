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
		title: 'ApplyFlow',
		description:
			'Ecosistema inteligente de gestión de candidaturas: centraliza ofertas de portales de empleo, adapta tu CV y carta de presentación con IA y envía tu candidatura por email con el CV en PDF.',
		tech: ['React', 'TypeScript', 'Spring Boot', 'Java', 'IA (OpenRouter)'],
		image: '/applyflow.png',
		alt: 'Logo de ApplyFlow',
		url: 'https://applyflow-cordevro.netlify.app',
	},
];
