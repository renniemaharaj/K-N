import {
  Award,
  Building2,
  CheckCircle2,
  Clock,
  Shield,
  Sparkles,
  Home,
  DogIcon,
} from "lucide-react";
import { Feature, Service } from "./types";

const services: Service[] = [
  {
    icon: <Home className="h-6 w-6 text-primary" />,
    title: "Recurring Maid Services",
    description: "Weekly, biweekly, and monthly appointments available.",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Deep Cleaning Services",
    description: "Thorough cleaning for homes that need extra attention.",
  },
  {
    icon: <Building2 className="h-6 w-6 text-primary" />,
    title: "Move In/Out Cleaning",
    description: "Complete cleaning services for your moving needs.",
  },
];

const features: Feature[] = [
  {
    icon: <Shield className="h-5 w-5 text-primary" />,
    text: "Insured & Bonded",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
    text: "Background-Checked",
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    text: "Punctual & Reliable",
  },
  {
    icon: <Award className="h-5 w-5 text-primary" />,
    text: "Professionally Trained",
  },
  {
    icon: <Award className="h-5 w-5 text-primary" />,
    text: "Courteous & Respectful Cleaners",
  },
  {
    icon: <DogIcon className="h-5 w-5 text-primary" />,
    text: "Pet-Friendly",
  },
];

export { services, features };
