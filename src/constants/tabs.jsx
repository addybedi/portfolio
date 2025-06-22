import {
  BookOpenText,
  Building2,
  Cpu,
  House,
  PanelsTopLeft,
  SquareUserRound,
} from "lucide-react";
import { Home } from "../components/Home";
import { Projects } from "../components/Projects";
import { Education } from "../components/Education";
import { Companies } from "../components/Companies";
import { Contact } from "../components/Contact";
import { TechnicalSkills } from "../components/TechnicalSkils";

export const tabs = [
  {
    label: "Home",
    icon: (className) => <House className={className} />,
    component: (props) => <Home {...props} />,
  },
  {
    label: "My Projects",
    icon: (className) => <PanelsTopLeft className={className} />,
    component: (props) => <Projects {...props} />,
  },
  {
    label: "My Skills",
    icon: (className) => <Cpu className={className} />,
    component: (props) => <TechnicalSkills {...props} />,
  },
  {
    label: "My Education",
    icon: (className) => <BookOpenText className={className} />,
    component: (props) => <Education {...props} />,
  },
  {
    label: "Companies",
    icon: (className) => <Building2 className={className} />,
    component: (props) => <Companies {...props} />,
  },
  {
    label: "Contact Me",
    icon: (className) => <SquareUserRound className={className} />,
    component: (props) => <Contact {...props} />,
  },
];
