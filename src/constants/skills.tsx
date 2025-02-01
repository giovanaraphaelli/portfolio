import { FaGithub, FaReact, FaSass } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io5';
import {
  RiHtml5Fill,
  RiJavascriptLine,
  RiNextjsLine,
  RiTailwindCssFill,
} from 'react-icons/ri';
import { SiJest, SiMui, SiRedux, SiStyledcomponents } from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { FaGitAlt } from 'react-icons/fa';
import { RxAccessibility } from 'react-icons/rx';

export const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Next.js', icon: <RiNextjsLine /> },
  { name: 'TypeScript', icon: <TbBrandTypescript /> },
  { name: 'JavaScript', icon: <RiJavascriptLine /> },
  { name: 'HTML', icon: <RiHtml5Fill /> },
  { name: 'CSS', icon: <IoLogoCss3 /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'SASS', icon: <FaSass /> },
  { name: 'Tailwind', icon: <RiTailwindCssFill /> },
  { name: 'Styled Components', icon: <SiStyledcomponents /> },
  { name: 'Material UI', icon: <SiMui /> },
  { name: 'Jest', icon: <SiJest /> },
  { name: 'Acessibilidade', icon: <RxAccessibility /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
];
