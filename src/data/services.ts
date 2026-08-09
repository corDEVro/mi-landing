export interface Service {
	title: string;
	description: string;
	icon: 'code' | 'layers' | 'cart' | 'figma' | 'wrench';
}

export const services: Service[] = [
	{
		title: 'Desarrollo web a medida',
		description:
			'Sitios y aplicaciones web creados desde cero, con un diseño adaptado a tu negocio y a tus objetivos.',
		icon: 'code',
	},
	{
		title: 'Soluciones digitales',
		description:
			'Aplicaciones y herramientas digitales a medida: web apps, automatizaciones y SaaS que resuelven tus retos.',
		icon: 'layers',
	},
	{
		title: 'E-commerce',
		description:
			'Tiendas online completas con catálogo, carrito y pasarelas de pago seguras para vender sin límites.',
		icon: 'cart',
	},
	{
		title: 'Diseño UX/UI',
		description:
			'Interfaces usables y atractivas, pensadas para guiar a tus usuarios y convertirlos en clientes.',
		icon: 'figma',
	},
	{
		title: 'Mantenimiento y soporte',
		description:
			'Actualizaciones, mejoras y asistencia continua para que tu web siga segura, rápida y al día.',
		icon: 'wrench',
	},
];
