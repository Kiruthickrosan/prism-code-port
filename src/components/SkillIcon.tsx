import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiReact,
} from "react-icons/si";
import { TbApi, TbBinaryTree, TbBoxModel2, TbDatabase, TbRoute, TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const iconMap: Record<string, IconType> = {
  java: FaJava,
  javascript: SiJavascript,
  sql: TbSql,
  react: SiReact,
  html5: SiHtml5,
  css3: SiCss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  api: TbApi,
  mongodb: SiMongodb,
  mysql: SiMysql,
  oracle: GrOracle,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  postman: SiPostman,
  "data-structures": TbBinaryTree,
  algorithms: TbRoute,
  oop: TbBoxModel2,
  dbms: TbDatabase,
};

export function SkillIcon({ icon, name }: { icon: string; name: string }) {
  const Icon = iconMap[icon] ?? TbBoxModel2;
  return (
    <span className={`skill-icon skill-icon--${icon}`} aria-label={`${name} icon`} role="img">
      <Icon aria-hidden="true" />
    </span>
  );
}