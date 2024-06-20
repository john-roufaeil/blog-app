import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: '#FF5722',  // Deep Orange
                secondary: '#FFC107',  // Amber
                accent1: '#00BCD4',  // Cyan
                accent2: '#8BC34A',  // Light Green
                background: '#FFFFFF',  // White
                text: '#212121',  // Dark Grey
            },
        },
    },
    plugins: [],
};
export default config;