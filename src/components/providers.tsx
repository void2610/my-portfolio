"use client";

import { HeroUIProvider as Provider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function HeroUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider>
      <NextThemesProvider 
        attribute="class" 
        defaultTheme="light" 
        themes={["light", "dark"]}
        enableSystem={false}
        disableTransitionOnChange
        forcedTheme={undefined}
        storageKey="portfolio-theme"
      >
        {children}
      </NextThemesProvider>
    </Provider>
  );
}