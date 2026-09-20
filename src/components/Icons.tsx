import { ArrowUpRight, Braces, Code2, Database, Download, Github, Linkedin, Mail, Menu, Terminal, X } from "lucide-react";

const icons = { github: Github, linkedin: Linkedin, mail: Mail, code: Code2, terminal: Terminal, database: Database, braces: Braces };
export function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const Component = icons[name as keyof typeof icons] ?? Code2;
  return <Component size={size} aria-hidden="true" />;
}
export { ArrowUpRight, Download, Menu, X };
