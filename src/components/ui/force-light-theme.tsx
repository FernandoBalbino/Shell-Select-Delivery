"use client";

import { useEffect } from "react";

export default function ForceLightTheme() {
  useEffect(() => {
    // Força o tema claro no documento
    const forceLightTheme = () => {
      // Remove qualquer classe dark do HTML
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");

      // Define color-scheme como light
      document.documentElement.style.colorScheme = "light";
      document.body.style.colorScheme = "light";

      // Força background branco
      document.documentElement.style.backgroundColor = "white";
      document.body.style.backgroundColor = "white";

      // Força cor do texto escura
      document.documentElement.style.color = "#1a1a1a";
      document.body.style.color = "#1a1a1a";
    };

    // Executa imediatamente
    forceLightTheme();

    // Observa mudanças no sistema de preferências
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Sempre força tema claro, independente da preferência do sistema
      forceLightTheme();
    };

    // Adiciona listener para mudanças
    mediaQuery.addEventListener("change", handleChange);

    // Força tema claro periodicamente (para casos extremos)
    const interval = setInterval(forceLightTheme, 1000);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      clearInterval(interval);
    };
  }, []);

  return null; // Este componente não renderiza nada
}




