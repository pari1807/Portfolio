import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: "var(--brand)",
        primary: {
          DEFAULT: "#d8b9ff",
          foreground: "hsl(var(--primary-foreground))",
          container: "#9244f4",
          "fixed": "#eddcff",
          "fixed-dim": "#d8b9ff",
        },
        secondary: {
          DEFAULT: "#9ecaff",
          foreground: "hsl(var(--secondary-foreground))",
          container: "#1e95f2",
          "fixed": "#d1e4ff",
          "fixed-dim": "#9ecaff",
        },
        tertiary: {
          DEFAULT: "#d4bbff",
          container: "#855ace",
          "fixed": "#ebdcff",
          "fixed-dim": "#d4bbff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Stitch MCP "Neon Nocturne" palette
        surface: {
          DEFAULT: "#17111b",
          dim: "#17111b",
          bright: "#3e3642",
          container: "#241d28",
          "container-low": "#201924",
          "container-high": "#2f2732",
          "container-highest": "#3a323d",
          "container-lowest": "#120c16",
          variant: "#3a323d",
          tint: "#d8b9ff",
        },
        "on-primary": "#450086",
        "on-secondary": "#003258",
        "on-tertiary": "#400688",
        "on-surface": "#ebdeee",
        "on-surface-variant": "#cac3d8",
        "on-background": "#ebdeee",
        "on-primary-container": "#fef6ff",
        "on-secondary-container": "#002b4d",
        "on-tertiary-container": "#fdf6ff",
        "on-error": "#690005",
        "on-error-container": "#ffdad6",
        "outline": "#948ea1",
        "outline-variant": "#494455",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        neon: {
          purple: "#9244f4",
          "purple-light": "#d8b9ff",
          blue: "#1e95f2",
          "blue-light": "#9ecaff",
          violet: "#855ace",
          "violet-light": "#d4bbff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(146, 68, 244, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(146, 68, 244, 0.25)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        shine: "shine 0.6s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
