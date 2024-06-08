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
},
},
plugins: [require("daisyui")],
daisyui: {
themes: [
{
light: {
"--btn-focus-scale": "0.95",
"--rounded-btn": "0",
primary: "#041A22",
"primary-focus": "#570df8",
"primary-content": "#ffffff",
secondary: "#13B2C4",
"secondary-focus": "#bd0091",
"secondary-content": "#ffffff",
accent: "#37cdbe",
"accent-focus": "#2aa79b",
"accent-content": "#ffffff",
neutral: "#041A22",
"neutral-focus": "#16181d",
"neutral-content": "#041A22",
"base-100": "#FFFFFF",
"base-200": "#2a2e37",
"base-300": "#16181d",
"base-content": "#041A22",
info: "#66c6ff",
success: "#87d039",
warning: "#e2d562",
error: "#ff6f6f",
},
},
],
},
};
export default config;
