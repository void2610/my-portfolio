"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useHaptics } from "@/hooks/useHaptics";

const subscribeNothing = () => () => {};

export default function ThemeToggle() {
  // サーバー描画とハイドレーション中は false、クライアントで描画し直すと true になる
  const mounted = useSyncExternalStore(subscribeNothing, () => true, () => false);
  const { theme, setTheme } = useTheme();
  const { trigger } = useHaptics();

  if (!mounted) {
    return (
      <Button
        isIconOnly
        variant="ghost"
        size="sm"
        className="text-tertiary"
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5" />
      </Button>
    );
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    trigger("light");
  };

  return (
    <Button
      isIconOnly
      variant="ghost"
      size="sm"
      className="text-tertiary hover:text-primary"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </Button>
  );
}