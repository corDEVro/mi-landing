export interface Social {
	label: string;
	href: string;
	icon: 'github' | 'linkedin' | 'instagram';
}

export const socials: Social[] = [
	{ label: 'GitHub', href: 'https://github.com/corDEVro', icon: 'github' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/juan-manuel-cor-gan', icon: 'linkedin' },
];
