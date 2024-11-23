import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";
import doctor3 from "../assets/doctor3.png";
import loginimage from "../assets/loginimage.png";


export const navItems = [
  { label: "Home 🏠", href: "/home" },
  { label: "Disease Search 🧟‍♂️", href: "/DiseaseSearch" },
  { label: "Dosage Safety Check 🤒", href: "/DosageSafetyCheck" },
  { label: "Pregnancy Description  🤷‍♀️", href: "/pregnancydescription" },
  {
    label: "Consultation 😷",
    items: [
      { label: "Chatbot 🤖", href: "/chatbot" },
      { label: "Video Call 💻", href: "/VideoCall" },
    ],
  },
  { label: "Contact Us  ☎", href: "/ContactUs" },
  // { label: "LogOut", href: "/" },
];

export const Home = [
  {
    title: "Drug Safety Checks",
    description:
      "We provide detailed and accurate drug safety checks to ensure safe usage of medications.",
  },
  {
    title: "Chatbot Support",
    description:
      "Our chatbot offers 24/7 assistance for all your queries and concerns.",
  },
  {
    title: "AI Assistance to Reduce Time",
    description:
      "Our AI-powered system helps reduce time by streamlining processes and providing smart suggestions.",
  },
  {
    title: "Video Call Consultations",
    description:
      "Schedule video call consultations with healthcare professionals for personalized care.",
  },
];
export const DiseaseSearch = [
  {
    title: "Disease Search",
    description:
      "A dedicated page where users can enter disease names to find relevant drug interactions and medical information.",
  },
];

export const DosageSafetyCheck = [
  {
    title: "Dosage Safety Check",
    description:
      "A page where users can input their age, dosage, and medication name to check if it's safe.",
  },
];
export const Chatbot = [
  {
    title: "Chatbot",
    description: "Users can engage in a chat for quick answers about their concerns.",
  },
];
export const VideoCall = [
  {
    title: "Video Call",
    description: "Allows users to book or start a video call session with a healthcare professional.",
  },
];

export const Resources = [
  {
    title: "Resources",
    description: "Educational material on drug safety, interactions, and general healthcare advice.",
  },
];

export const ContactUs = [
  {
    title: "Contact Us",
    description: "A form for general inquiries and support.",
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const footer = {
  resourcesLinks,
  platformLinks,
  communityLinks,
};
