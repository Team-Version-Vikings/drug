// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          typing: {
            from: { width: '0' },
            to: { width: '100%' },
          },
          blink: {
            '50%': { borderColor: 'transparent' },
          },
        },
        animation: {
          typing: 'typing 2s steps(15), blink 1s step-end infinite alternate',
        },
      },
    },
  }