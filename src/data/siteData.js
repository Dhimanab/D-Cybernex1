import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CloudCog,
  DatabaseBackup,
  FileCheck2,
  HeartPulse,
  Layers3,
  LockKeyhole,
  Network,
  Radar,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from 'lucide-react';

export const navItems = [
  ['Home', 'home'],
  ['Services', 'services'],
  ['Industries', 'industries'],
  ['Approach', 'approach'],
  ['Projects', 'projects'],
  ['About', 'about'],
  ['Contact', 'contact'],
];

export const heroStats = [
  { icon: ShieldCheck, title: 'Security-first', text: 'Built-in protection' },
  { icon: Activity, title: 'Operational clarity', text: 'Systems you can manage' },
  { icon: BadgeCheck, title: 'Compliance-ready', text: 'ISO 27001-aligned' },
];

export const services = [
  { icon: ServerCog, title: 'IT Infrastructure', text: 'Servers, networks, endpoints, backups, access control and documentation.' },
  { icon: LockKeyhole, title: 'Cybersecurity', text: 'Risk reviews, vulnerability checks, hardening and remediation planning.' },
  { icon: CloudCog, title: 'Cloud & DevOps', text: 'AWS, Azure, GitHub workflows, CI/CD, secure hosting and automation.' },
  { icon: FileCheck2, title: 'Compliance Support', text: 'ISMS-aligned policies, registers, records and control implementation.' },
  { icon: Radar, title: 'Security Monitoring', text: 'Wazuh-ready monitoring, endpoint agents, logs, alerts and visibility.' },
  { icon: TerminalSquare, title: 'Business Systems', text: 'Dashboards, admin panels, visitor systems and internal web tools.' },
];

export const industries = [
  { icon: HeartPulse, name: 'Healthcare & MedTech' },
  { icon: Building2, name: 'Infrastructure Operations' },
  { icon: Layers3, name: 'Manufacturing & Industrial' },
  { icon: Workflow, name: 'Growing Businesses' },
  { icon: Network, name: 'Professional Services' },
];

export const workAreas = [
  'Medical IT infrastructure hardening',
  'Server, network and endpoint administration',
  'VAPT workflow and reporting support',
  'Cloud deployment and CI/CD setup',
  'Backup, recovery and access control records',
  'Open-source SIEM visibility roadmap',
];

export const approach = [
  ['01', 'Understand', 'Map systems, users, risks and operational needs.'],
  ['02', 'Design', 'Create practical, secure and scalable architecture.'],
  ['03', 'Implement', 'Deploy controls, workflows, tools and documentation.'],
  ['04', 'Harden', 'Improve configurations, access, backup and monitoring.'],
  ['05', 'Support', 'Keep environments manageable, visible and ready to grow.'],
];

export const tech = ['Microsoft 365', 'Azure', 'AWS', 'Linux', 'Windows Server', 'Wazuh', 'GitHub', 'VMware', 'Fortinet', 'Veeam'];

export const contact = {
  email: 'info@dcybernex.com',
  altEmail: 'enquiry@dcybernex.com',
  location: 'India',
};

export { ArrowUpRight, DatabaseBackup };
