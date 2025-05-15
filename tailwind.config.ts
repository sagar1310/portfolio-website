import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',  // Apple white
          alt: '#f5f5f7',     // Light gray background
          light: '#fbfbfd'    // Subtle off-white
        },
        text: {
          primary: '#1d1d1f',    // Almost black
          secondary: '#86868b',   // Medium gray
          accent: '#6e6e73'      // Darker gray for emphasis
        },
        accent: {
          primary: '#FF3366',     // Modern pink
          secondary: '#FF9500',   // Warm orange
          tertiary: '#5856D6',    // Rich purple
          quaternary: '#2AC3D3'   // Turquoise
        },
        border: {
          DEFAULT: '#d2d2d7',     // Light gray border
          light: '#e8e8ed'        // Lighter border
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.8)',
          dark: 'rgba(245, 245, 247, 0.9)'
        }
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0, 0, 0, 0.05)',
        hover: '0 4px 20px rgba(0, 0, 0, 0.1)',
        glow: '0 0 20px rgba(255, 51, 102, 0.15)'  // Pink glow effect
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(135deg, #FF3366 0%, #5856D6 50%, #2AC3D3 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FF3366 0%, #FF9500 100%)',
        'gradient-cool': 'linear-gradient(135deg, #5856D6 0%, #2AC3D3 100%)'
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 2s ease-in-out infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        glow: {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(255, 51, 102, 0.15)'
          },
          '50%': {
            'box-shadow': '0 0 30px rgba(255, 51, 102, 0.25)'
          }
        }
      }
    },
  },
  plugins: [],
}

export default config 