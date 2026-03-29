export type Service = {
	id: string;
	title: string;
	description: string;
	price: string;
	delivery: string;
	category: 'repair' | 'support' | 'security' | 'infrastructure';
	highlights: string[];
};

export type Product = {
	sku: string;
	name: string;
	description: string;
	price: number;
	stock: number;
	tag: string;
	rating: number;
};

export type Testimonial = {
	name: string;
	company: string;
	quote: string;
};

export const services: Service[] = [
	{
		id: 'endpoint-health-check',
		title: 'Endpoint Health Check',
		description:
			'Comprehensive diagnostics for slow computers, unstable laptops, and devices with intermittent network issues.',
		price: '$79 per device',
		delivery: 'Same day',
		category: 'repair',
		highlights: [
			'CPU, RAM, storage, and thermal analysis',
			'Windows and macOS startup optimization',
			'Malware scan and remediation checklist',
		],
	},
	{
		id: 'business-helpdesk',
		title: 'Business Helpdesk Plan',
		description:
			'Unlimited remote support tickets for teams that need predictable IT assistance and quick resolution times.',
		price: '$399 / month',
		delivery: '24/7 portal',
		category: 'support',
		highlights: [
			'Priority response in under 30 minutes',
			'Device onboarding and user account setup',
			'Software patching and update coordination',
		],
	},
	{
		id: 'managed-security',
		title: 'Managed Security Suite',
		description:
			'Layered security monitoring with endpoint protection, phishing defense, and monthly risk reporting.',
		price: '$14 per endpoint',
		delivery: 'Rolling monthly',
		category: 'security',
		highlights: [
			'Next-gen antivirus deployment',
			'Zero-trust policy templates',
			'Actionable security scorecard',
		],
	},
	{
		id: 'network-refresh',
		title: 'Network Refresh Package',
		description:
			'Upgrade aging routers and switches with a resilient, segmented network design for modern workloads.',
		price: '$1,290 project base',
		delivery: '2 to 5 days',
		category: 'infrastructure',
		highlights: [
			'Wi-Fi dead zone elimination',
			'VLAN segmentation for guests and staff',
			'Firewall policy hardening',
		],
	},
];

export const products: Product[] = [
	{
		sku: 'PT-LAP-14PRO',
		name: 'ProTech 14" Business Laptop',
		description:
			'Intel Core Ultra, 16GB RAM, 512GB NVMe, and enterprise-grade firmware security with 3-year warranty.',
		price: 1099,
		stock: 18,
		tag: 'Best Seller',
		rating: 4.8,
	},
	{
		sku: 'PT-DOC-2X4K',
		name: 'USB-C Docking Station 2x4K',
		description:
			'Universal dock with dual 4K output, 100W pass-through charging, and stable Ethernet for hybrid teams.',
		price: 229,
		stock: 42,
		tag: 'Hot Deal',
		rating: 4.7,
	},
	{
		sku: 'PT-FW-SMB',
		name: 'SecureEdge SMB Firewall',
		description:
			'Cloud-managed firewall appliance with IDS/IPS, VPN, and application-level traffic controls.',
		price: 749,
		stock: 11,
		tag: 'Security',
		rating: 4.9,
	},
	{
		sku: 'PT-AP-MESH6',
		name: 'Wi-Fi 6 Mesh Access Point',
		description:
			'Business-grade wireless access point with seamless roaming, guest portal, and centralized control.',
		price: 319,
		stock: 27,
		tag: 'New',
		rating: 4.6,
	},
	{
		sku: 'PT-BKP-NAS4',
		name: '4-Bay Backup NAS Kit',
		description:
			'Automated backup storage kit with RAID support, immutable snapshots, and remote sync capability.',
		price: 899,
		stock: 9,
		tag: 'Data Safety',
		rating: 4.8,
	},
	{
		sku: 'PT-MON-27QHD',
		name: '27" QHD Productivity Monitor',
		description:
			'Ergonomic IPS display with USB hub, eye-care mode, and height-adjustable stand for long workdays.',
		price: 329,
		stock: 33,
		tag: 'Office Essential',
		rating: 4.5,
	},
];

export const testimonials: Testimonial[] = [
	{
		name: 'Ava Brooks',
		company: 'Northview Dental',
		quote:
			'ProTech stabilized our entire network and reduced support downtime by more than 60% in the first month.',
	},
	{
		name: 'Liam Patel',
		company: 'Urban Craft Interiors',
		quote:
			'Their remote support team is fast, clear, and proactive. We finally have IT that feels like a partner.',
	},
	{
		name: 'Sophia Rivera',
		company: 'Harbor Legal Group',
		quote:
			'From security audits to device provisioning, ProTech made every process easier and fully documented.',
	},
];

export const supportChannels = [
	{
		title: 'Remote Help Desk',
		description: 'Secure remote support for software issues, account problems, and troubleshooting.',
		availability: '24/7',
		cta: 'Open ticket',
	},
	{
		title: 'On-Site Repair',
		description: 'Technician dispatch for urgent hardware failures, network outages, and office setups.',
		availability: 'Mon-Sat 7:00-19:00',
		cta: 'Schedule visit',
	},
	{
		title: 'Security Incident Response',
		description: 'Immediate triage for ransomware, suspicious login alerts, and data exposure risks.',
		availability: 'Emergency hotline',
		cta: 'Call now',
	},
	{
		title: 'Procurement & Setup',
		description: 'End-to-end sourcing, imaging, and deployment of laptops, peripherals, and network gear.',
		availability: 'Project-based',
		cta: 'Request quote',
	},
];
