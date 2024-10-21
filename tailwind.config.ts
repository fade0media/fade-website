import type { Config } from "tailwindcss";
const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
    
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      // backdropBlur: {
      //   sm: '4px',
      //   lg: '16px',
      // },
  		backgroundImage: {
  			'card-gradient': 'radial-gradient(circle at top right, #CDE7AA 0%, #EBB76E 26%, #CB755B 54%, #463380 100%)'
  		},
  		colors: {
  			background: '#000000',
  			foreground: 'var(--foreground)'
  		},
  		keyframes: {
			scroll: {
				to: {
				  transform: "translate(calc(-50% - 0.5rem))",
				},
			  },
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			fadeOut: {
  				'0%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				},
  				'100%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				}
  			},
  			slideDiagonal: {
  				'0%': {
  					transform: 'translate(-50%, -50%)',
  					top: '50%',
  					left: '50%'
  				},
  				'100%': {
  					transform: 'translate(0, 0)',
  					top: '0',
  					left: '0'
  				}
  			},
  			rotate: {
  				'0%': {
  					transform: 'rotate(0deg) scale(10)'
  				},
  				'100%': {
  					transform: 'rotate(-360deg) scale(10)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			
  		},
  		animation: {
  			fadeIn: 'fadeIn 0.5s ease-out forwards',
  			fadeOut: 'fadeOut 0.5s ease-out forwards',
  			'slide-diagonal': 'slideDiagonal 5s ease-out forwards',
  			rotate: 'rotate 15s linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			scroll: 'scroll 40s forwards linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("@anishshobithps/tailwind-breakpoints"), 
			require('tailwind-hamburgers'), 
			require("tailwindcss-animate"),
			addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ]
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }
export default config;