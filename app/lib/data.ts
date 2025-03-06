import { LaptopMinimal, MoonStar, Sun } from "lucide-react";
import { Icons } from "@/app/components/icons";

const modeToggle = [
  {
    title: "System",
    icon: LaptopMinimal,
    theme: "system",
  },
  {
    title: "Light",
    icon: Sun,
    theme: "light",
  },
  {
    title: "Dark",
    icon: MoonStar,
    theme: "dark",
  },
];

const blocks = [
  {
    title: "Side quests",
  },
];

const sideQuests: {
  title: string;
  description: string;
  src: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  alt: string;
}[] = [
  {
    title: "Geist Theme",
    description:
      "A minimal and elegant Visual Studio Code theme inspired by Vercel's Geist and ray.so, designed for an immersive coding experience.",
    src: Icons.geist,
    alt: "Geist Theme",
  },
];

export { modeToggle, blocks, sideQuests };
