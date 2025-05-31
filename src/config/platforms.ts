import GitHubIcon from "@/components/icons/GitHubIcon";
import SteamIcon from "@/components/icons/SteamIcon";
import UnityroomIcon from "@/components/icons/UnityroomIcon";
import { Platform } from "@/data/projects";

export const platformConfig = {
  github: {
    name: "GitHub",
    icon: GitHubIcon,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-50 dark:bg-gray-800/30",
    borderColor: "border-gray-300 dark:border-gray-600",
    textColor: "text-gray-700 dark:text-gray-300"
  },
  unityroom: {
    name: "unityroom", 
    icon: UnityroomIcon,
    color: "from-[#2E93FF] to-[#1E7AD8]",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-300 dark:border-blue-600", 
    textColor: "text-[#2E93FF] dark:text-blue-300"
  },
  steam: {
    name: "Steam",
    icon: SteamIcon,
    color: "from-[#1b2838] to-[#2a475e]",
    bgColor: "bg-slate-50 dark:bg-slate-800/30",
    borderColor: "border-slate-300 dark:border-slate-600",
    textColor: "text-slate-700 dark:text-slate-300"
  }
} as const satisfies Record<Platform, {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}>;