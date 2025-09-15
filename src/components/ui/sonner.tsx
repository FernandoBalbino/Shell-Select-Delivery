"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "bg-green-50 border-green-200 text-green-800 shadow-lg rounded-lg p-4",
          title: "text-green-800 font-medium text-sm",
          description: "text-green-600 text-sm mt-1",
          icon: "text-green-600",
        },
      }}
      style={
        {
          "--normal-bg": "#f0fdf4", // green-50
          "--normal-text": "#166534", // green-800
          "--normal-border": "#bbf7d0", // green-200
          "--success-bg": "#f0fdf4",
          "--success-text": "#166534",
          "--success-border": "#bbf7d0",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
