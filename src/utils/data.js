import { IoHome } from "react-icons/io5";
import { MdFace2 } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { IoIosPeople, IoMdMail } from "react-icons/io";
import { SiFrontendmentor } from "react-icons/si";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export const NAVIGATION = [
  {
    id: 1,
    name: "Start",
    href: "/",
    icon: <IoHome className="w-4 h-4" />,
  },
  {
    id: 2,
    name: "About me",
    href: "/about",
    icon: <MdFace2 className="w-4 h-4" />,
  },
  {
    id: 3,
    name: "Projects",
    href: "/projects",
    icon: <AiFillProject className="w-4 h-4" />,
  },
  {
    id: 4,
    name: "References",
    href: "/references",
    icon: <IoIosPeople className="w-4 h-4" />,
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
    icon: <IoMdMail className="w-4 h-4" />,
  },
];

export const SOCIALS = [
  {
    id: 1,
    name: "Github",
    href: "https://github.com/lubnafathima",
    icon: <BsGithub className="w-6 h-6" />,
  },
  {
    id: 2,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lubna-fathima-n/",
    icon: <BsLinkedin className="w-6 h-6" />,
  },
  {
    id: 3,
    name: "Frontend Mentor",
    href: "https://www.frontendmentor.io/profile/lubnafathima",
    icon: <SiFrontendmentor className="w-6 h-6" />,
  },
  {
    id: 4,
    name: "Twitter",
    href: "https://twitter.com/MsCoder1/",
    icon: <BsTwitter className="w-6 h-6" />,
  },
];
