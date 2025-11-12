import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.png";
import user2 from "../assets/profile-pictures/user2.png";
import user3 from "../assets/profile-pictures/user3.png";
import user4 from "../assets/profile-pictures/user4.png";

export const navItems = [
   { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Services", href: "/#services" },
];

export const emailJsDetails = { 
  service_id: "service_nlbzjfr",
  template_id : "template_iqli2sq",
  public_key : "R8PZ6mgN_7ga8Pfjo" ,
};

export const testimonials = [
  {
    user: "Saul Martin Serebe",
    company: "Ssenge Baptist Church",
    image: user2,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Rev Kafeero Ezekiel",
    company: "LIAB Ministries",
    image: user4,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and skills were instrumental in bringing our vision to life",
  },
  {
    user: "James Asaba",
    company: "Hifiradio Uganda",
    image: user1,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable.",
  },
  {
    user: "Nina Mugerwa",
    company: "Personal Music Website",
    image: user3,
    text: "Working with the team at ProsperTech was a game-changer for our project. Their attention to detail helped us achieve our goals faster than we thought possible. ",
  },
];

export const services = [
  {
    icon: <BotMessageSquare />,
    text: "Web Development",
    description:
      "We create responsive, visually striking websites that reflect your mission and branding to engage your audience.",
  },
  {
    icon: <Fingerprint />,
    text: "Digital Branding & UX Strategy",
    description:
      "We Design brand-aligned UI/UX prototypes for Websites, Apps and other systems offering storytelling and functional strategy",
  },
  {
    icon: <ShieldHalf />,
    text: "Mobile App Development",
    description:
      "We Design and develop mobile applications that deliver seamless performance, intuitive user experiences, and purpose-driven functionality.",
  },
  {
    icon: <BatteryCharging />,
    text: "API Development & Integration",
    description:
      " We Build Custom APIs for internal tools or public use and Integrate third-party services (Payment Gateways, AI systems etc.)",
  },
  {
    icon: <PlugZap />,
    text: "Systems analysis and Documentation",
    description:
      "We also document systems especially for scaling businesses, nonprofits, and development teams that want maintainable, future-proof systems.",
  },
  {
    icon: <GlobeLock />,
    text: "AI Integration & Automation",
    description:
      "We Build AI-powered features into websites or apps (chatbots, recommendation engines) Automate workflows for businesses",
  },
];


export const projects = [
     {
    title: "Contivibe Media",
    category: "Website",
    features: [
      "TailWind and PHP",
      "Laravel CMS Backend",
      "Live Radio Integration",
      "Fast Performance"
    ],
     link:"https://contivibemedia.com",
  },
   {
    title: "Trinity Guest House",
    category: "Web",
    features: [
      "Fully functional",
      "Admin Dashboard",
      "Modern UI",
      "Javascript/PHP",
    ],
    link:"https://trinitygraceguesthouse.com",
  },
    {
    title: "Church Website",
    category: "Website",
    features: [
      "Mordern UI and Backend CMS",
      "Wordpress",
      "Real Sermons",
      "Real Time Analytics",
    ],
     link:"https://ssengebaptistchurch.org",
  },
 ,
    {
    title: "Radio Website",
    category: "Website",
    features: [
      "Live Radio Integration",
      "Mordern UI",
      "Fast Performance",
      "WordPress",
    ],
     link:"https://hifiradios.com",
  },
  {
    title: "LIAB Website",
    category: "Website",
    features: [
      "Responsive UI",
      "Admin Dashboard",
      "High Performance",
      "Real Time Performance",
    ],
     link:"https://liabministries.org/",
  },
    {
    title: "DST Mobile",
    category: "Mobile App",
    features: [
      "Tracking field sales",
       "Admin Dashboard",
      "Modern UI",
      "Cross platform App",
    ],
     link:"https://github.com/MWIYIKINWA/DSTMobile_app/blob/main/README.md",
  },
  {
    title: "MyChc App",
    category: "Web and Mobile",
    features: [
      "Ministry App",
      "React Admin Dashboard",
      "Laravel/PHP Api",
      "Android/IOS",
    ],
    link:"https://github.com/MWIYIKINWA/myChc",
  }
];

export const links1 = [
  { href: "#", text: "+(256) 756151375" },
   { href: "#", text: "Wakiso, UG" },
  { href: "#", text: "GitHub" },
 
];

export const links2 = [
  { href: "/#services", text: "Services" },
  { href: "/#projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

